// Run with: node scripts/selftest.mjs   (needs "type": "module" in package.json, which Vite projects have)
import { runSelfTests } from '../src/selftest.js';

const results = runSelfTests();
results.forEach((r) => console.log(`${r.pass ? 'PASS' : 'FAIL'}  ${r.name}: expected ${r.expected}, got ${r.actual}`));
const failed = results.filter((r) => !r.pass).length;
console.log(failed ? `\n${failed} FAILED` : `\nAll ${results.length} checks pass`);
process.exit(failed ? 1 : 0);
