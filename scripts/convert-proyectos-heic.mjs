import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const convert = require("heic-convert");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.resolve(__dirname, "../src/imports/proyectos");

for (const f of fs.readdirSync(dir)) {
  if (!/\.heic$/i.test(f)) continue;
  const input = path.join(dir, f);
  const outName = f.replace(/\.heic$/i, ".jpg");
  const output = path.join(dir, outName);
  const inputBuffer = fs.readFileSync(input);
  const jpegBuffer = await convert({
    buffer: inputBuffer,
    format: "JPEG",
    quality: 0.88,
  });
  fs.writeFileSync(output, Buffer.from(jpegBuffer));
  console.log("OK", f, "->", outName);
}
