import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";

const route = './src/api/content/pages/';



const getPage = (__filename: string) => {
  const page = fs.readFileSync(
    path.resolve(route, `${__filename}.md`),
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
  const { data } = grayMatter(getPageMarkdown);

  return {body: JSON.stringify({ ...data })}
}
