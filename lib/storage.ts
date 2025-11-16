import { AppState } from './types';

const STORAGE_KEY = 'goal-app:v1';

export function loadState(): AppState {
  if (typeof window === 'undefined') {
    return { goalSet: null, dailyLogs: [] };
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as AppState) : { goalSet: null, dailyLogs: [] };
  } catch {
    return { goalSet: null, dailyLogs: [] };
  }
}

export function saveState(state: AppState) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore quota/serialization errors for v1
  }
}


