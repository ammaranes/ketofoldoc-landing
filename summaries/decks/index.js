import { allDecks as saudiDecks } from './saudi/index.js';
import { allChapters as thousandQsChapters } from './thousand_qs/index.js';

export const allQuestionDecks = [
  ...(saudiDecks || []).map(d => ({ ...d, sourceName: 'Saudi Board QB', sourceBadgeColor: 'blue' })),
  ...(thousandQsChapters || []).map(d => ({ ...d, sourceName: '1000 Questions', sourceBadgeColor: 'emerald' }))
];
