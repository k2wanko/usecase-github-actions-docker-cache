import url from "node:url";
import express from "express";

export const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

if (module === require.main) {
	app.listen(port, () => {
		console.log(`Example app listening at http://localhost:${port}`);
	});
}

if (import.meta.url.startsWith("file:")) {
	const modulePath = url.fileURLToPath(import.meta.url);
	if (process.argv[1] === modulePath) {
		app.listen(port, () => {
			console.log(`Example app listening at http://localhost:${port}`);
		});
	}
}
