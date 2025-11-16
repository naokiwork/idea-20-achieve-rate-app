import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AppState, DailyLog, GoalSet } from '@/lib/types';
import { ratingLabelToScore } from '@/lib/prediction';

interface AppActions {
  setGoalSet: (goalSet: GoalSet | null) => void;
  upsertDailyLog: (log: Omit<DailyLog, 'ratingScore'> & { ratingScore?: number }) => void;
  deleteDailyLog: (date: string) => void;
  resetAll: () => void;
}

type Store = AppState & AppActions;

export const useAppState = create<Store>()(
  persist(
    (set, get) => ({
      goalSet: null,
      dailyLogs: [],
      setGoalSet: (goalSet) => set({ goalSet }),
      upsertDailyLog: (log) => {
        const ratingScore = (log.ratingScore ?? ratingLabelToScore(log.ratingLabel)) as DailyLog['ratingScore'];
        const newLog: DailyLog = { ...log, ratingScore };
        const rest = get().dailyLogs.filter((l) => l.date !== newLog.date);
        set({ dailyLogs: [...rest, newLog].sort((a, b) => a.date.localeCompare(b.date)) });
      },
      deleteDailyLog: (date) => set({ dailyLogs: get().dailyLogs.filter((l) => l.date !== date) }),
      resetAll: () => set({ goalSet: null, dailyLogs: [] }),
    }),
    {
      name: 'goal-app:v1',
      version: 1,
    }
  )
);


