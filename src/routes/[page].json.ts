import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";

const route = 'src/api/content/pages/';

const getPage = (__filename: string) => {
  console.log(__filename)
  fs.readdir('/', (err, files) => {
    files.forEach(file => {
      console.log(file);
    });
  });
  const page = fs.readFileSync(
    route + `${__filename}.md`,
    "utf-8"
  );
  console.log(page)
  return page
};


export function get(req: any, res: any) {
  const { page } = req.params;
  let pageCopy = page;
  if (page === undefined) {
    pageCopy = "index"
  }
  const getPageMarkdown = getPage(pageCopy);
  console.log(getPageMarkdown)
  const { data } = grayMatter(getPageMarkdown);

  return {body: JSON.stringify({ ...data })}
}
