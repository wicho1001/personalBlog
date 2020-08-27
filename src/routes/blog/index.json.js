import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";

const getAllPost = () => {
	try {
		return fs.readdirSync("static/posts/").map((__filename) => {
			const post = fs.readFileSync(
				path.resolve("static/posts", __filename),
				"utf-8"
			);
			return grayMatter(post).data;
		});
	} catch(e) {
		return []
	}
};


export function get(_, res) {
	res.writeHead(200, {
		"Content-Type": "application/json",
	});
	const posts = getAllPost();
	res.end(JSON.stringify(posts));
}
