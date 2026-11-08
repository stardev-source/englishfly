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
      { id: 'beginner-12', title: 'Beginner 12  FINAL ', questions: beginner12 },
    ],
  },
  { id: 'elementary', name: 'Elementary', tests: [] },
  { id: 'pre-intermediate', name: 'Pre-Intermediate', tests: [] },
];

export function findTest(testId) {
  for (const level of LEVELS) {
    const test = level.tests.find((t) => t.id === testId);
    if (test) return { ...test, levelId: level.id, levelName: level.name };
  }
  return null;
}