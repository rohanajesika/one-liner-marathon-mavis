// One-Liner Marathon — make.fun entry.
//
// A single deterministic one-line comedy joke. The program writes the joke
// to /output/entry.txt and nothing else: no network, no randomness, no
// runtime state. The same bytes come out on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My bank flagged my $4 coffee as suspicious but waved a $2,000 crypto 'opportunity' straight through — turns out fraud has better branding than I do.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
