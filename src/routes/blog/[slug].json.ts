import path from "path";
import fs from "fs";
import grayMatter from "gray-matter";
import marked from "marked";
import type { Request, Response, NextFunction } from "express";

const getPost = (__filename: any) => {
  return fs.readFileSync(
    path.resolve("static/content/posts/", `${__filename}.md`),
    "utf-8"
  );
}

export function get(req: Request, res: Response, _: NextFunction) {
  const { slug } = req.params;

  const post = getPost(slug);
  const renderer = new marked.Renderer();

  const { data, content } = grayMatter(post);
  const html = marked(content, { renderer });

  if(html) {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify({ html, ...data }));
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    })

    res.end(
      JSON.stringify({
        message: `Not found`,
      })
    )
  }
}