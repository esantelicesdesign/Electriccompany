import { copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const dist = join(process.cwd(), "dist");
const indexHtml = join(dist, "index.html");
const notFound = join(dist, "404.html");

if (!existsSync(indexHtml)) {
  console.warn("copy-spa-404: omitido (dist/index.html no existe).");
  process.exit(0);
}

copyFileSync(indexHtml, notFound);
console.log("copy-spa-404: dist/404.html (SPA fallback para GitHub Pages).");
