export type GoalLevel = 'MAX' | 'MIDDLE' | 'MINIMUM';

export type DailyRatingLabel =
  | 'MAX'
  | 'MAX_MIDDLE'
  | 'MIDDLE'
  | 'MIDDLE_MINIMUM'
  | 'MINIMUM';

export type DailyRatingScore = 1 | 2 | 3 | 4 | 5;

export interface GoalSet {
  id: string;
  startDate: string;
  deadline: string;
  maxGoal: string;
  middleGoal: string;
  minimumGoal: string;
  dailyMaxAction: string;
  dailyMiddleAction: string;
  dailyMinimumAction: string;
}

export interface DailyLog {
  date: string;
  ratingLabel: DailyRatingLabel;
  ratingScore: DailyRatingScore;
  note?: string;
}

export interface GoalStats {
  averageScore: number;
  totalDays: number;
  ratingCounts: Record<DailyRatingLabel, number>;
}

export interface AchievementProbabilities {
  maxGoalPercent: number;
  middleGoalPercent: number;
  minimumGoalPercent: number;
}

export interface AppState {
  goalSet: GoalSet | null;
  dailyLogs: DailyLog[];
}


