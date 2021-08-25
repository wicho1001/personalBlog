import path from "path";
import fs from "fs";
import grayMatter from "gray-matter";
import marked from "marked";


const route = 'src/api/content/posts/';


const getPost = (__filename: any) => {
  const post = fs.readFileSync(
    path.join(route, `${__filename}.md`),
    "utf-8"
  );
  
  const { data, content } = grayMatter(post);
  const renderer = new marked.Renderer();
  renderer.link = function(href, title, text) {
    var link = marked.Renderer.prototype.link.call(this, href, title, text);
    return link.replace("<a","<a target='_blank' ");
  };
  marked.setOptions({
    renderer: renderer
  });
  const html = marked(content, { renderer });
  return { html, data, content };
}


const getAllPost = () => {
  try {
    return fs.readdirSync(route).map((__filename) => {
      const post = getPost(__filename.split('.md')[0])
      return {...post.data, description: `${post.content.slice(0, 50)}...`};
    });
  } catch(e) {
    return []
  }
};

export function get(req) {
  const { slug } = req.params;
  if (slug === 'index') {
    const posts = getAllPost();
    if (posts) {
      return {body: JSON.stringify(posts)};
    } else {
      return {body: 'error'};
    }
  }
  const post = getPost(slug);
  if(post.html) {
    return {body: JSON.stringify({ html: post.html, ...post.data })};
  } else {
    return {body: 'error'};
    
  }
}