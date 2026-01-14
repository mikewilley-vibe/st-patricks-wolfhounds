import { Trophy } from "lucide-react";
import { getSeasonStats } from "@/app/data/season";

export default function TeamStats() {
  const { wins, losses, gamesPlayed, gamesRemaining, winPercentage } = getSeasonStats();

  const stats = [
    { label: "Season Record", value: `${wins}–${losses}`, color: "bg-green-50 text-green-700" },
    { label: "Games Played", value: gamesPlayed.toString(), color: "bg-purple-50 text-purple-700" },
    { label: "Games Remaining", value: gamesRemaining.toString(), color: "bg-indigo-50 text-indigo-700" },
    { label: "Win Percentage", value: `${winPercentage}%`, color: "bg-blue-50 text-blue-700" },
  ];
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Trophy className="size-8 text-purple-600" />
        <h2 className="text-2xl font-semibold">Team Statistics</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className={`rounded-2xl p-4 shadow-sm ring-1 ring-slate-200/70 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${stat.color}`}
            style={{ animation: `fade-in-up 0.6s ease-out ${0.1 * idx}s both` }}
          >
            <p className="text-xs font-semibold tracking-wide opacity-80">
              {stat.label}
            </p>
            <p className="mt-1 text-2xl font-semibold">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70 transition-all duration-300 hover:shadow-lg" style={{ animation: "fade-in-up 0.7s ease-out 0.4s both" }}>
        <h3 className="mb-4 text-lg font-semibold text-slate-900">
          Top Scorers
        </h3>
        <p className="text-sm text-slate-500 text-center">
          Player statistics will be updated as games are played.
        </p>
      </div>
    </div>
  );
}