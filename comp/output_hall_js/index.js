import { chapter01 } from './chapter_01.js';
import { chapter02 } from './chapter_02.js';
import { chapter03 } from './chapter_03.js';
import { chapter04 } from './chapter_04.js';
import { chapter05 } from './chapter_05.js';
import { chapter06 } from './chapter_06.js';
import { chapter07 } from './chapter_07.js';
import { chapter08 } from './chapter_08.js';
import { chapter09 } from './chapter_09.js';
import { chapter10 } from './chapter_10.js';
import { chapter11 } from './chapter_11.js';

export const allChapters = [
  { id: 1, title: "Anesthesia Equipment and Physics", questions: chapter01 },
  { id: 2, title: "Respiratory Physiology and Critical Care Medicine", questions: chapter02 },
  { id: 3, title: "Pharmacology and Pharmacokinetics of Intravenous Drugs", questions: chapter03 },
  { id: 4, title: "Pharmacology and Pharmacokinetics of Volatile Anesthetics", questions: chapter04 },
  { id: 5, title: "Blood Products, Transfusion, and Fluid Therapy", questions: chapter05 },
  { id: 6, title: "General Anesthesia", questions: chapter06 },
  { id: 7, title: "Pediatric Physiology and Anesthesia", questions: chapter07 },
  { id: 8, title: "Obstetric Physiology and Anesthesia", questions: chapter08 },
  { id: 9, title: "Neurologic Physiology and Anesthesia", questions: chapter09 },
  { id: 10, title: "Anatomy, Regional Anesthesia, and Pain Management", questions: chapter10 },
  { id: 11, title: "Cardiovascular Physiology and Anesthesia", questions: chapter11 },
];

export const allQuestions = allChapters.flatMap(ch => ch.questions);
