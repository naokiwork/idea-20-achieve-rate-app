import {
  AchievementProbabilities,
  DailyLog,
  DailyRatingLabel,
  DailyRatingScore,
} from './types';

export function ratingLabelToScore(label: DailyRatingLabel): DailyRatingScore {
  switch (label) {
    case 'MAX':
      return 5;
    case 'MAX_MIDDLE':
      return 4;
    case 'MIDDLE':
      return 3;
    case 'MIDDLE_MINIMUM':
      return 2;
    case 'MINIMUM':
      return 1;
  }
}

export function calculateAverageScore(dailyLogs: DailyLog[]): number {
  if (dailyLogs.length === 0) return 0;
  const sum = dailyLogs.reduce((acc, log) => acc + log.ratingScore, 0);
  return sum / dailyLogs.length;
}

function fitness(avg: number, anchor: number, maxDistance = 3): number {
  const dist = Math.abs(avg - anchor);
  const raw = 1 - dist / maxDistance;
  return Math.max(0, Math.min(1, raw));
}

export function calculateAchievementProbabilities(
  averageScore: number
): AchievementProbabilities {
  const anchorMax = 4.5;
  const anchorMiddle = 3.0;
  const anchorMinimum = 1.5;

  const max = fitness(averageScore, anchorMax);
  const middle = fitness(averageScore, anchorMiddle);
  const minimum = fitness(averageScore, anchorMinimum);

  return {
    maxGoalPercent: Math.round(max * 100),
    middleGoalPercent: Math.round(middle * 100),
    minimumGoalPercent: Math.round(minimum * 100),
  };
}


