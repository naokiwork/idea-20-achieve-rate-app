import { calculateAchievementProbabilities, calculateAverageScore, ratingLabelToScore } from '@/lib/prediction';
import { DailyLog } from '@/lib/types';

describe('prediction', () => {
  test('rating label to score', () => {
    expect(ratingLabelToScore('MAX')).toBe(5);
    expect(ratingLabelToScore('MIDDLE')).toBe(3);
    expect(ratingLabelToScore('MINIMUM')).toBe(1);
  });

  test('average score', () => {
    const logs: DailyLog[] = [
      { date: '2025-01-01', ratingLabel: 'MIDDLE', ratingScore: 3 },
      { date: '2025-01-02', ratingLabel: 'MAX', ratingScore: 5 },
    ];
    expect(calculateAverageScore(logs)).toBe(4);
  });

  test('probabilities return valid percentages', () => {
    const p = calculateAchievementProbabilities(4);
    expect(p.maxGoalPercent).toBeGreaterThanOrEqual(0);
    expect(p.maxGoalPercent).toBeLessThanOrEqual(100);
    expect(p.middleGoalPercent).toBeGreaterThanOrEqual(0);
    expect(p.minimumGoalPercent).toBeLessThanOrEqual(100);
  });
});


