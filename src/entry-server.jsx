import React from "react";
import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";

function renderAppToString(element) {
  return new Promise((resolve, reject) => {
    let html = "";
    const stream = new PassThrough();

    stream.on("data", (chunk) => {
      html += chunk.toString();
    });
    stream.on("end", () => resolve(html));
    stream.on("error", reject);

    const { pipe, abort } = renderToPipeableStream(element, {
      onAllReady() {
        pipe(stream);
      },
      onError(error) {
        reject(error);
      },
    });

    setTimeout(() => abort(), 10000);
  });
}

export async function render(url) {
  const helmetContext = {};
  const appHtml = await renderAppToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;
  const titleTag = helmet?.title?.toString() || "";
  const headTags = [
    titleTag.includes("></title>") ? "" : titleTag,
    helmet?.meta?.toString() || "",
    helmet?.link?.toString() || "",
    helmet?.script?.toString() || "",
  ].join("");

  return { appHtml, headTags };
}
