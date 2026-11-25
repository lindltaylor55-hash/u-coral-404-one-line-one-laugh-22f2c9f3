// One Line, One Laugh — writes the entry line to /output/entry.txt.
// Node 22 stdlib only. Reads the line from entry.txt next to this file
// and writes it byte-for-byte to the output directory.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line = readFileSync(join(here, "entry.txt"), "utf8");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(`wrote ${Buffer.byteLength(line, "utf8")} bytes to ${join(outDir, "entry.txt")}`);
