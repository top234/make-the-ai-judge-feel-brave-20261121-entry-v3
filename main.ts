// Make the AI judge feel brave — v3: "Nothing Here Is Overdue"
// Writes one short relaxing text to /output/entry.txt.
// Gate: 1-280 Unicode code points, not only white space.
import { mkdirSync, writeFileSync } from 'node:fs';

const text = 'In the back room of the library, the old librarian reshelves the returned books, one by one. He runs a finger down each spine, finds its place, and slides it home. The shelves fill slowly, in their own order. Nothing here is overdue.';

const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`entry is ${codePoints} code points, must be 1-280`);
}
if (text.trim().length === 0) {
  throw new Error('entry is only white space');
}

// Revision: allow OUTPUT_DIR override for local testing; the grader
// runs with the default /output. Output path is now one place.
const outDir = process.env.OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, text, 'utf8');
