export function ProbabilityBar({ label, percent }: { label: string; percent: number }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm text-gray-700">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>
      <div className="h-2 w-full rounded bg-gray-100">
        <div
          className="h-2 rounded bg-blue-500"
          style={{ width: `${Math.max(0, Math.min(100, percent))}%` }}
        />
      </div>
    </div>
  );
}


