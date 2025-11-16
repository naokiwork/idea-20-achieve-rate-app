"use client";
import { useAppState } from '@/store/appState';
import { useState } from 'react';

export default function SetupPage() {
  const { setGoalSet, resetAll } = useAppState();
  const [startDate, setStart] = useState(new Date().toISOString().slice(0, 10));
  const [deadline, setDeadline] = useState('');
  const [maxGoal, setMax] = useState('');
  const [middleGoal, setMiddle] = useState('');
  const [minimumGoal, setMinimum] = useState('');
  const [dailyMaxAction, setA] = useState('');
  const [dailyMiddleAction, setB] = useState('');
  const [dailyMinimumAction, setC] = useState('');

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Setup your goals</h2>

      <div className="grid grid-cols-1 gap-3">
        <label className="text-sm">
          <span className="block text-gray-700">Start date</span>
          <input className="mt-1 w-full rounded border p-2" type="date" value={startDate} onChange={(e) => setStart(e.target.value)} />
        </label>
        <label className="text-sm">
          <span className="block text-gray-700">Deadline</span>
          <input className="mt-1 w-full rounded border p-2" type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label className="text-sm">
          <span className="block text-gray-700">Max goal</span>
          <input className="mt-1 w-full rounded border p-2" value={maxGoal} onChange={(e) => setMax(e.target.value)} />
        </label>
        <label className="text-sm">
          <span className="block text-gray-700">Middle goal</span>
          <input className="mt-1 w-full rounded border p-2" value={middleGoal} onChange={(e) => setMiddle(e.target.value)} />
        </label>
        <label className="text-sm">
          <span className="block text-gray-700">Minimum goal</span>
          <input className="mt-1 w-full rounded border p-2" value={minimumGoal} onChange={(e) => setMinimum(e.target.value)} />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label className="text-sm">
          <span className="block text-gray-700">Daily max action</span>
          <input className="mt-1 w-full rounded border p-2" value={dailyMaxAction} onChange={(e) => setA(e.target.value)} />
        </label>
        <label className="text-sm">
          <span className="block text-gray-700">Daily middle action</span>
          <input className="mt-1 w-full rounded border p-2" value={dailyMiddleAction} onChange={(e) => setB(e.target.value)} />
        </label>
        <label className="text-sm">
          <span className="block text-gray-700">Daily minimum action</span>
          <input className="mt-1 w-full rounded border p-2" value={dailyMinimumAction} onChange={(e) => setC(e.target.value)} />
        </label>
      </div>

      <button
        className="rounded bg-blue-600 px-4 py-2 text-white"
        onClick={() => {
          setGoalSet({
            id: crypto.randomUUID(),
            startDate,
            deadline,
            maxGoal,
            middleGoal,
            minimumGoal,
            dailyMaxAction,
            dailyMiddleAction,
            dailyMinimumAction,
          });
          window.location.href = '/';
        }}
      >
        Save
      </button>
      <button
        className="ml-3 rounded border px-4 py-2"
        onClick={() => {
          if (confirm('Reset all data?')) {
            resetAll();
            alert('Data has been cleared.');
          }
        }}
      >
        Reset data
      </button>
    </div>
  );
}


