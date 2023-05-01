import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3001;

async function createServer() {
    const app = express();
    const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: 'custom',
    });
    app.use(vite.middlewares);
    app.use('*', async(req, res) => {
        const url = req.originalUrl;
        let html = fs
            .readFileSync(path.resolve(__dirname, "./index.html"))
            .toString();
        html = await vite.transformIndexHtml(url, html);
        const parts = html.split(`<!--react-component-ssr-->`);
        const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
        const {pipe} = render(url, {
            onShellReady() {
                res.write(parts[0]);
                pipe(res);
            },
            onShellError() {
                // do error handling
            },
            onAllReady() {
                // last thing to write
                res.write(parts[1]);
                res.end();
            },
            onError(err: Error) {
                console.error(err);
            },
        });
    });
    app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
}

createServer();







