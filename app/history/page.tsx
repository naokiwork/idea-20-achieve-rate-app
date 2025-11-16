"use client";
import { useAppState } from '@/store/appState';

export default function HistoryPage() {
  const { dailyLogs, deleteDailyLog } = useAppState();
  const exportJson = () => {
    const blob = new Blob([JSON.stringify({ dailyLogs }, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'goal-app-data.json';
    a.click();
    URL.revokeObjectURL(url);
  };
  const sorted = [...dailyLogs].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">History</h2>
      <div className="flex gap-2">
        <button className="rounded border px-3 py-1.5 hover:bg-gray-50" onClick={exportJson}>
          Export JSON
        </button>
      </div>
      <div className="rounded border">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left">Date</th>
              <th className="px-3 py-2 text-left">Label</th>
              <th className="px-3 py-2 text-left">Score</th>
              <th className="px-3 py-2 text-left">Note</th>
              <th className="px-3 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((l) => (
              <tr key={l.date} className="border-t">
                <td className="px-3 py-2">{l.date}</td>
                <td className="px-3 py-2">{l.ratingLabel}</td>
                <td className="px-3 py-2">{l.ratingScore}</td>
                <td className="px-3 py-2">{l.note}</td>
                <td className="px-3 py-2 text-right">
                  <button
                    className="rounded border px-2 py-1 hover:bg-gray-50"
                    onClick={() => deleteDailyLog(l.date)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {sorted.length === 0 ? (
              <tr>
                <td className="px-3 py-6 text-center text-gray-500" colSpan={5}>
                  No logs yet. Rate today to begin.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}


