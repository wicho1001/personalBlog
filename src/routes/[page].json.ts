import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";
import type { Request, Response } from "express";

const getPage = (__filename: string) => {
  return fs.readFileSync(
    path.resolve("static/content/pages/", `${__filename}.md`),
    "utf-8"
  );
};


export function get(req: Request, res: Response) {
  const { slug } = req.params;
  let slugCopy = slug;
  if (slug === undefined) {
    slugCopy = "index"
  }
  const page = getPage(slugCopy);

  const { data } = grayMatter(page);

  if(data) {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify({ ...data }));
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
