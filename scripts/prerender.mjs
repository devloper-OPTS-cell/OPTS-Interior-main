import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { createServer } from "vite";

const root = path.resolve(process.cwd());
const distDir = path.resolve(root, "dist");
const templatePath = path.resolve(distDir, "index.html");

if (!fs.existsSync(templatePath)) {
  console.error("Missing dist/index.html. Run `npm run build` first.");
  process.exit(1);
}

const { projects } = await import(
  pathToFileURL(path.resolve(root, "src/data/projects.js")).href
);

const routes = [
  "/",
  "/about-us",
  "/services",
  "/projects",
  "/contact-us",
  "/faq",
  ...projects.map((project) => `/projects/${project.slug}`),
];

const template = fs.readFileSync(templatePath, "utf-8");

const vite = await createServer({
  root,
  logLevel: "error",
  server: { middlewareMode: true, hmr: false },
  appType: "custom",
  ssr: {
    noExternal: ["react-helmet-async"],
  },
});

try {
  for (const url of routes) {
    const { render } = await vite.ssrLoadModule("/src/entry-server.jsx");
    const { appHtml, headTags } = await render(url);

    let html = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    if (headTags) {
      if (headTags.includes("<title")) {
        html = html.replace(/<title[^>]*>[\s\S]*?<\/title>/i, "");
      }
      html = html.replace("</head>", `${headTags}\n  </head>`);
    }

    const filePath =
      url === "/"
        ? path.resolve(distDir, "index.html")
        : path.resolve(distDir, url.slice(1), "index.html");

    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, html);
  }
} finally {
  await vite.close();
}
