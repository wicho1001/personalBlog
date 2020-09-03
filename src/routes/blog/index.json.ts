import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";
import type { Request, Response } from "express";

const getAllPost = () => {
  try {
    return fs.readdirSync("static/content/posts/").map((__filename) => {
      const post = fs.readFileSync(
        path.resolve("static/content/posts", __filename),
        "utf-8"
      );
      return grayMatter(post).data;
    });
  } catch(e) {
    return []
  }
};


export function get(_: Request, res: Response) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  const posts = getAllPost();
  res.end(JSON.stringify(posts));
}
