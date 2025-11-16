"use client";
import { useAppState } from '@/store/appState';
import { DailyRatingLabel } from '@/lib/types';
import { useState } from 'react';

const LABELS: { key: DailyRatingLabel; text: string }[] = [
  { key: 'MINIMUM', text: 'Minimum' },
  { key: 'MIDDLE_MINIMUM', text: 'Middle−' },
  { key: 'MIDDLE', text: 'Middle' },
  { key: 'MAX_MIDDLE', text: 'Max−' },
  { key: 'MAX', text: 'Max' },
];

export default function RatePage() {
  const { upsertDailyLog } = useAppState();
  const [label, setLabel] = useState<DailyRatingLabel>('MIDDLE');
  const [note, setNote] = useState('');
  const today = new Date().toISOString().slice(0, 10);

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Rate today</h2>
      <div className="grid grid-cols-5 gap-2">
        {LABELS.map((l) => (
          <button
            key={l.key}
            onClick={() => setLabel(l.key)}
            className={`rounded border px-3 py-2 text-sm ${label === l.key ? 'bg-blue-600 text-white' : 'bg-white hover:bg-gray-50'}`}
          >
            {l.text}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        <label className="text-sm text-gray-700">Note</label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full rounded border p-2"
          rows={3}
          placeholder="Optional..."
        />
      </div>

      <button
        className="rounded bg-blue-600 px-4 py-2 text-white"
        onClick={() => {
          upsertDailyLog({ date: today, ratingLabel: label, note });
          window.location.href = '/';
        }}
      >
        Save
      </button>
    </div>
  );
}


