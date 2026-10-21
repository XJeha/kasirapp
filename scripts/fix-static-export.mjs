/**
 * Workaround untuk bug static export Next.js 16 di Windows:
 * file RSC segment ditulis sebagai `__next.<segmen>/__PAGE__.txt`, padahal
 * browser meminta `__next.<segmen>.__PAGE__.txt`.
 *
 * https://github.com/vercel/next.js/issues/85374
 *
 * Script ini menduplikasi file segment ke nama datar yang diminta, lalu
 * menghapus direktori segment yang tidak diperlukan. Tidak mengubah HTML,
 * CSS, atau JavaScript aplikasi.
 */
import { copyFileSync, existsSync, readdirSync, rmSync, statSync } from "node:fs";
import { join } from "node:path";

const outDir = join(process.cwd(), "out");

if (!existsSync(outDir)) {
  console.log("[fix-static-export] Folder out/ tidak ditemukan, dilewati.");
  process.exit(0);
}

let flattened = 0;

function flattenDirectory(parentDir, prefix, dir) {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      flattenDirectory(parentDir, `${prefix}.${entry}`, fullPath);
      continue;
    }

    const flatPath = join(parentDir, `${prefix}.${entry}`);
    copyFileSync(fullPath, flatPath);
    flattened += 1;
  }
}

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    if (!statSync(fullPath).isDirectory()) continue;

    if (entry.startsWith("__next.") && entry !== "__next") {
      flattenDirectory(dir, entry, fullPath);
      rmSync(fullPath, { recursive: true, force: true });
      continue;
    }

    walk(fullPath);
  }
}

walk(outDir);

console.log(
  flattened > 0
    ? `[fix-static-export] ${flattened} file segment RSC dipetakan ke nama datar.`
    : "[fix-static-export] Tidak ada segment RSC bersarang; tidak ada perubahan.",
);
