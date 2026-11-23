// Make the AI judge feel curious — entry program.
// Writes one short text to /output/entry.txt: 279 Unicode code points
// (limit 1–280), one concrete image, one thread, no explanation of the
// mystery — the last line leaves the question open for the reader.
// Deterministic: same bytes on every run. Standard library only, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Every year on the same grey Tuesday, the same book turns up on a different shelf in the town library. " +
  "Nobody borrows it. Nobody remembers shelving it. " +
  "The librarian has stopped writing it down. " +
  "She just leaves a pencil beside it now, and waits to see which page it opens to next.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
