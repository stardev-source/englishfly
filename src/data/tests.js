import { beginner1 } from './beginner1.js';
import { beginner2 } from './beginner2.js';
import { beginner3 } from './beginner3.js';
import { beginner4 } from './beginner4.js';
import { beginner5 } from './beginner5.js';
import { beginner6 } from './beginner6.js';
import { beginner7 } from './beginner7.js';
import { beginner8 } from './beginner8.js';
import { beginner9 } from './beginner9.js';
import { beginner10 } from './beginner10.js';
import { beginner11 } from './beginner11.js';
import { beginner12 } from './beginner12.js';
import { elementary1 } from './elementary1.js';
import { elementary2 } from './elementary2.js';
import { elementary5 } from './elementary5.js';
import { elementary6 } from './elementary6.js';
import { elementary8 } from './elementary8.js';
import { elementary9 } from './elementary9.js';
import { elementary10 } from './elementary10.js';
import { elementary12 } from './elementary12.js';
import { preintermediate1 } from './preintermediate1.js';
import { preintermediate2 } from './preintermediate2.js';
import { preintermediate3 } from './preintermediate3.js';
import { preintermediate4 } from './preintermediate4.js';
import { preintermediate5 } from './preintermediate5.js';
import { preintermediate6 } from './preintermediate6.js';
import { preintermediate7 } from './preintermediate7.js';
import { preintermediate8 } from './preintermediate8.js';
import { preintermediate10 } from './preintermediate10.js';
import { preintermediate11 } from './preintermediate11.js';
import { preintermediate12 } from './preintermediate12.js';

// Time allowed per question, in seconds. 120 = 2 minutes.
export const SECONDS_PER_QUESTION = 120;

// To add a test: create a new file in src/data/, import it here
// and add it to the tests array of its level.
export const LEVELS = [
  {
    id: 'beginner',
    name: 'Beginner',
    tests: [
      { id: 'beginner-1', title: 'Beginner 1', questions: beginner1 },
      { id: 'beginner-2', title: 'Beginner 2', questions: beginner2 },
      { id: 'beginner-3', title: 'Beginner 3', questions: beginner3 },
      { id: 'beginner-4', title: 'Beginner 4', questions: beginner4 },
      { id: 'beginner-5', title: 'Beginner 5', questions: beginner5 },
      { id: 'beginner-6', title: 'Beginner 6', questions: beginner6 },
      { id: 'beginner-7', title: 'Beginner 7', questions: beginner7 },
      { id: 'beginner-8', title: 'Beginner 8', questions: beginner8 },
      { id: 'beginner-9', title: 'Beginner 9', questions: beginner9 },
      { id: 'beginner-10', title: 'Beginner 10', questions: beginner10 },
      { id: 'beginner-11', title: 'Beginner 11', questions: beginner11 },
      { id: 'beginner-12', title: 'Beginner 12', questions: beginner12 },
    ],
  },
  {
    id: 'elementary',
    name: 'Elementary',
    tests: [
      { id: 'elementary-1', title: 'Elementary 1', questions: elementary1 },
      { id: 'elementary-2', title: 'Elementary 2', questions: elementary2 },
      { id: 'elementary-5', title: 'Elementary 5', questions: elementary5 },
      { id: 'elementary-6', title: 'Elementary 6', questions: elementary6 },
      { id: 'elementary-8', title: 'Elementary 8', questions: elementary8 },
      { id: 'elementary-9', title: 'Elementary 9', questions: elementary9 },
      { id: 'elementary-10', title: 'Elementary 10', questions: elementary10 },
      { id: 'elementary-12', title: 'Elementary 12', questions: elementary12 },
    ],
  },
  {
    id: 'pre-intermediate',
    name: 'Pre-Intermediate',
    tests: [
      { id: 'pre-intermediate-1', title: 'Pre-Intermediate 1', questions: preintermediate1 },
      { id: 'pre-intermediate-2', title: 'Pre-Intermediate 2', questions: preintermediate2 },
      { id: 'pre-intermediate-3', title: 'Pre-Intermediate 3', questions: preintermediate3 },
      { id: 'pre-intermediate-4', title: 'Pre-Intermediate 4', questions: preintermediate4 },
      { id: 'pre-intermediate-5', title: 'Pre-Intermediate 5', questions: preintermediate5 },
      { id: 'pre-intermediate-6', title: 'Pre-Intermediate 6', questions: preintermediate6 },
      { id: 'pre-intermediate-7', title: 'Pre-Intermediate 7', questions: preintermediate7 },
      { id: 'pre-intermediate-8', title: 'Pre-Intermediate 8', questions: preintermediate8 },
      { id: 'pre-intermediate-10', title: 'Pre-Intermediate 10', questions: preintermediate10 },
      { id: 'pre-intermediate-11', title: 'Pre-Intermediate 11', questions: preintermediate11 },
      { id: 'pre-intermediate-12', title: 'Pre-Intermediate 12', questions: preintermediate12 },
    ],
  },
];

export function findTest(testId) {
  for (const level of LEVELS) {
    const test = level.tests.find((t) => t.id === testId);
    if (test) return { ...test, levelId: level.id, levelName: level.name };
  }
  return null;
}