import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";

const route = process.env.NODE_ENV === 'production' ? './content/pages/' : 'static/content/pages/';

const getPage = (__filename: string) => {
  return fs.readFileSync(
    path.resolve(route, `${__filename}.md`),
    "utf-8"
  );
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
