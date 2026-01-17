import { BarChart3 } from "lucide-react";
import { getSeasonStats, GAMES } from "@/app/data/season";

// Youth Girls Division Standings from TCBL
const ST_AGNES_STANDINGS = [
  { name: "SMS1", gp: 3, wins: 3, losses: 0, draws: 0 },
  { name: "STPCS2", gp: 2, wins: 2, losses: 0, draws: 0 },
  { name: "SOS2", gp: 2, wins: 1, losses: 1, draws: 0 },
  { name: "STPCS3", gp: 3, wins: 0, losses: 3, draws: 0 },
  { name: "SGGS2", gp: 2, wins: 0, losses: 2, draws: 0 },
];

const ST_ROSE_OF_LIMA_STANDINGS = [
  { name: "STPCS1", gp: 3, wins: 3, losses: 0, draws: 0 },
  { name: "SGGS1", gp: 3, wins: 2, losses: 1, draws: 0 },
  { name: "SOS1", gp: 3, wins: 2, losses: 1, draws: 0 },
  { name: "SPX1", gp: 3, wins: 1, losses: 2, draws: 0 },
  { name: "SJA1", gp: 4, wins: 0, losses: 4, draws: 0 },
];

export default function Standings() {
  const { wins, losses, gamesPlayed, winPercentage } = getSeasonStats();

  // Calculate win percentage for standings
  const calculateWinPercentage = (w: number, gp: number) => {
    return gp > 0 ? Math.round((w / gp) * 100) : 0;
  };

  const stAgnesWithPercentage = ST_AGNES_STANDINGS.map((team) => ({
    ...team,
    winPercentage: calculateWinPercentage(team.wins, team.gp),
  }));

  const stRoseWithPercentage = ST_ROSE_OF_LIMA_STANDINGS.map((team) => ({
    ...team,
    winPercentage: calculateWinPercentage(team.wins, team.gp),
  }));

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <BarChart3 className="size-8 text-green-600" />
        <h2 className="text-2xl font-semibold">Standings</h2>
      </div>

      {/* Team Overall Record */}
      <div className="rounded-2xl bg-gradient-to-br from-green-50 via-white to-green-50 p-6 shadow-sm ring-1 ring-slate-200/70 transition-all duration-300 hover:shadow-lg">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">
          St. Patrick Wolfhounds (STPCS3)
        </h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200/70">
            <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
              Wins
            </p>
            <p className="mt-2 text-3xl font-bold text-green-600">{wins}</p>
          </div>
          <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200/70">
            <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
              Losses
            </p>
            <p className="mt-2 text-3xl font-bold text-red-600">{losses}</p>
          </div>
          <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200/70">
            <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
              Games Played
            </p>
            <p className="mt-2 text-3xl font-bold text-slate-700">
              {gamesPlayed}
            </p>
          </div>
          <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200/70">
            <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
              Win %
            </p>
            <p className="mt-2 text-3xl font-bold text-green-700">
              {winPercentage}%
            </p>
          </div>
        </div>
      </div>

      {/* St. Agnes Division */}
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70 overflow-hidden">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">
          St. Agnes Division
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="text-left py-3 px-4 font-semibold text-slate-700">
                  #
                </th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">
                  Team
                </th>
                <th className="text-center py-3 px-4 font-semibold text-slate-700">
                  GP
                </th>
                <th className="text-center py-3 px-4 font-semibold text-slate-700">
                  W
                </th>
                <th className="text-center py-3 px-4 font-semibold text-slate-700">
                  L
                </th>
                <th className="text-center py-3 px-4 font-semibold text-slate-700">
                  D
                </th>
                <th className="text-center py-3 px-4 font-semibold text-slate-700">
                  Win %
                </th>
              </tr>
            </thead>
            <tbody>
              {stAgnesWithPercentage.map((team, idx) => {
                const isStpcs3 = team.name === "STPCS3";
                return (
                  <tr
                    key={team.name}
                    className={`border-b border-slate-100 ${
                      isStpcs3
                        ? "bg-green-50 hover:bg-green-100"
                        : "hover:bg-slate-50"
                    } transition-colors`}
                    style={{
                      animation: `fade-in-up 0.6s ease-out ${0.05 * idx}s both`,
                    }}
                  >
                    <td className="py-3 px-4 text-slate-700 font-semibold">
                      {idx + 1}
                    </td>
                    <td
                      className={`py-3 px-4 font-medium ${
                        isStpcs3
                          ? "text-green-700 font-bold"
                          : "text-slate-900"
                      }`}
                    >
                      {team.name}
                      {isStpcs3 && " (Wolfhounds)"}
                    </td>
                    <td className="py-3 px-4 text-center text-slate-700">
                      {team.gp}
                    </td>
                    <td className="py-3 px-4 text-center text-green-600 font-semibold">
                      {team.wins}
                    </td>
                    <td className="py-3 px-4 text-center text-red-600 font-semibold">
                      {team.losses}
                    </td>
                    <td className="py-3 px-4 text-center text-slate-700">
                      {team.draws}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div
                        className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-sm font-semibold ${
                          isStpcs3
                            ? "bg-green-200 text-green-800"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {team.winPercentage}%
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* St. Rose of Lima Division */}
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70 overflow-hidden">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">
          St. Rose of Lima Division
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="text-left py-3 px-4 font-semibold text-slate-700">
                  #
                </th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">
                  Team
                </th>
                <th className="text-center py-3 px-4 font-semibold text-slate-700">
                  GP
                </th>
                <th className="text-center py-3 px-4 font-semibold text-slate-700">
                  W
                </th>
                <th className="text-center py-3 px-4 font-semibold text-slate-700">
                  L
                </th>
                <th className="text-center py-3 px-4 font-semibold text-slate-700">
                  D
                </th>
                <th className="text-center py-3 px-4 font-semibold text-slate-700">
                  Win %
                </th>
              </tr>
            </thead>
            <tbody>
              {stRoseWithPercentage.map((team, idx) => (
                <tr
                  key={team.name}
                  className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
                  style={{
                    animation: `fade-in-up 0.6s ease-out ${0.05 * idx}s both`,
                  }}
                >
                  <td className="py-3 px-4 text-slate-700 font-semibold">
                    {idx + 1}
                  </td>
                  <td className="py-3 px-4 text-slate-900 font-medium">
                    {team.name}
                  </td>
                  <td className="py-3 px-4 text-center text-slate-700">
                    {team.gp}
                  </td>
                  <td className="py-3 px-4 text-center text-green-600 font-semibold">
                    {team.wins}
                  </td>
                  <td className="py-3 px-4 text-center text-red-600 font-semibold">
                    {team.losses}
                  </td>
                  <td className="py-3 px-4 text-center text-slate-700">
                    {team.draws}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="inline-flex items-center justify-center rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
                      {team.winPercentage}%
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Playoff Info */}
      <div className="rounded-2xl bg-blue-50 p-6 ring-1 ring-blue-200 text-sm text-slate-700">
        <p className="font-semibold text-blue-900 mb-2">Playoff Information</p>
        <p>10 teams qualify for playoffs, sorted on wins (W) &gt; draws (D) &gt; losses (L) &gt; head-to-head (H2H) &gt; score difference (SD10)</p>
      </div>
    </div>
  );
}
