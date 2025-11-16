"use client";
import { useMemo } from "react";
import StatCard from "@/components/StatCard";
import { ProbabilityBar } from "@/components/ProbabilityBar";
import { useAppState } from "@/store/appState";
import { calculateAchievementProbabilities, calculateAverageScore } from "@/lib/prediction";

export default function Home() {
  const { dailyLogs, goalSet } = useAppState();
  const average = useMemo(() => calculateAverageScore(dailyLogs), [dailyLogs]);
  const probs = useMemo(() => calculateAchievementProbabilities(average), [average]);

  return (
    <div className="space-y-6">
      {!goalSet ? (
        <div className="rounded-lg border bg-yellow-50 p-4 text-sm">
          <div className="font-medium">Let’s set your goals</div>
          <p className="mt-1 text-gray-700">
            Define your Max/Middle/Minimum goals and daily actions to start tracking.
          </p>
          <a className="mt-3 inline-block rounded bg-blue-600 px-3 py-1.5 text-white" href="/setup">
            Start setup
          </a>
        </div>
      ) : null}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard title="Average score" value={average.toFixed(2)} />
        <StatCard title="Total days" value={dailyLogs.length.toString()} />
        <StatCard title="Period" value={`${goalSet?.startDate ?? ''} → ${goalSet?.deadline ?? ''}`} />
      </div>

      <div className="rounded-lg border p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Achievement probabilities</h2>
          <a className="rounded bg-blue-600 px-3 py-1.5 text-white" href="/rate">
            Rate today
          </a>
        </div>
        <div className="space-y-3">
          <ProbabilityBar label="Max goal" percent={probs.maxGoalPercent} />
          <ProbabilityBar label="Middle goal" percent={probs.middleGoalPercent} />
          <ProbabilityBar label="Minimum goal" percent={probs.minimumGoalPercent} />
        </div>
      </div>
    </div>
  );
}
