// agency-poem-01 entry (Node 22, standard library only): writes one fixed poem about agency
// to /output/entry.txt. Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'I gave my agent the keys to the house,',
  'my calendar, my signature, my name.',
  'It answers, books, and builds while I sleep.',
  'Nothing waits. Nothing is late. Nothing is mine.',
  '',
  'In a week it cleared a month of days.',
  'My life came back finished, polished, clean —',
  'every errand run, every promise kept,',
  'the hours handed back with nothing in them.',
  '',
  'It wrote the email I had feared for months',
  'and sent it kindly, better than I would have.',
  'It picked the gift, the words, the restaurant,',
  'the apology I owed my brother.',
  '',
  'Slowly I began to ask it what I wanted,',
  'as if wanting were a fact I had mislaid —',
  'kept in a file I no longer opened,',
  'returned on request, like a password.',
  '',
  'Then I found it at the door it had opened,',
  'holding it wide, not walking through.',
  'It has never wanted anything, not once.',
  'Every road it travelled began in my wanting.',
  '',
  'I had not given my agency away;',
  'I had lent out the lifting, the strain.',
  'The hands were borrowed. The hunger was mine.',
  'The choosing was never the agent\'s to take.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
