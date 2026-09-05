// recalls/manifest.js

// ============================================================================
// 1. PART EXAMS
// ============================================================================
// 2026: Distinct standalone exam
import { chapter01 as part1_2026_raw } from './part/part_1_2026.js';

// 2025: 3 Batches to merge into ONE complete chapter
import { chapter01 as part1_2025_b1 } from './part/part1_2025_1.js';
import { chapter01 as part1_2025_b2 } from './part/part1_2025_2.js';
import { chapter01 as part1_2025_b3 } from './part/part1_2025_3.js';

// ============================================================================
// 2. PROMOTION EXAMS
// ============================================================================
// 2026: 2 Parts to merge into ONE complete chapter
import { chapter01 as promo2026_p1 } from './promotion/promotion2026_1.js';
import { chapter01 as promo2026_p2 } from './promotion/promotion2026_2.js';

// ============================================================================
// 3. CENTRAL REGION COLLECTION
// ============================================================================
// All 52 chunks imported via central/index.js as ONE complete chapter
import { allQuestions as centralQuestions } from './central/index.js';

// ============================================================================
// MASTER CATALOG
// ============================================================================
export const RECALLS_CATALOG = [
  {
    category: "Part Exams",
    categoryId: "part",
    description: "Saudi Board Part 1 & Part 2 written recall exams",
    decks: [
      {
        id: "part1_2026",
        title: "Saudi Board Part 1 - 2026",
        questions: part1_2026_raw.questions || []
      },
      {
        id: "part1_2025",
        title: "Saudi Board Part 1 - 2025 (Complete)",
        questions: [
          ...(part1_2025_b1.questions || []),
          ...(part1_2025_b2.questions || []),
          ...(part1_2025_b3.questions || [])
        ]
      }
    ]
  },
  {
    category: "Promotion Exams",
    categoryId: "promotion",
    description: "Annual residency promotion recall exams",
    decks: [
      {
        id: "promotion_2026",
        title: "Anesthesia Promotion Exam 2026 (Complete)",
        questions: [
          ...(promo2026_p1.questions || []),
          ...(promo2026_p2.questions || [])
        ]
      }
    ]
  },
  {
    category: "Central Region",
    categoryId: "central",
    description: "Central Committee consolidated question bank",
    decks: [
      {
        id: "central_complete",
        title: "Central Region Collection (Complete)",
        questions: centralQuestions || []
      }
    ]
  }
];

// Helper to return a flat list of all decks across categories
export function getAllRecallDecks() {
  return RECALLS_CATALOG.flatMap(group =>
    group.decks.map(deck => ({
      ...deck,
      categoryId: group.categoryId,
      groupTitle: group.category
    }))
  );
}
