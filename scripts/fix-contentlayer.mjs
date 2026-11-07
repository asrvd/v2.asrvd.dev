// contentlayer 0.3.4 (unmaintained) writes `import ... assert { type: 'json' }`,
// which TypeScript 7 and newer Node reject. Rewrite it to `with { type: 'json' }`.
import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { join } from "node:path";

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith(".mjs") ? [p] : [];
  });

for (const file of walk(".contentlayer/generated")) {
  const src = readFileSync(file, "utf8");
  const out = src.replace(/\bassert\s*\{\s*type:\s*'json'\s*\}/g, "with { type: 'json' }");
  if (out !== src) writeFileSync(file, out);
}
