import Link from "next/link";
import { notFound } from "next/navigation";
import { PLAYERS, getPlayerById } from "@/app/data/players";

export const dynamic = "force-static";

export function generateStaticParams() {
  return PLAYERS.map((p) => ({ id: String(p.id) }));
}

export default async function PlayerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const playerId = Number(id);
  const player = Number.isFinite(playerId) ? getPlayerById(playerId) : undefined;

  if (!player) return notFound();

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      <section className="mx-auto max-w-5xl space-y-6 px-4 py-10">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm font-semibold text-slate-600 transition-all duration-300 hover:text-purple-700 hover:gap-2 group"
          style={{ animation: "fade-in-left 0.6s ease-out" }}
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span> Back to roster
        </Link>

        <div className="rounded-2xl bg-white/80 backdrop-blur p-6 shadow-sm ring-1 ring-slate-200/70 transition-all duration-300 hover:shadow-lg" style={{ animation: "fade-in-up 0.7s ease-out 0.1s both" }}>
          <div className="flex items-center gap-4">
            <div className="flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-300 to-indigo-700 text-white font-semibold shadow-sm transition-transform duration-300 hover:scale-110">
              #{player.number}
            </div>

            <div>
              <h1 className="text-2xl font-semibold text-slate-900">{player.name}</h1>
              <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                Grade {player.grade}
                {player.position ? ` · ${player.position}` : ""}
              </p>
            </div>
          </div>

          {player.bio ? (
            <p className="mt-4 whitespace-pre-line text-sm text-slate-600 leading-relaxed">
              {player.bio}
            </p>
          ) : null}
        </div>
        {player.stats ? (
  <div className="rounded-2xl bg-white/80 backdrop-blur p-6 shadow-sm ring-1 ring-slate-200/70 transition-all duration-300 hover:shadow-lg" style={{ animation: "fade-in-up 0.7s ease-out 0.2s both" }}>
    <h2 className="mb-4 text-lg font-semibold text-slate-900">
      Season Stats
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
      {[
        { label: "PTS", value: player.stats.points },
        { label: "REB", value: player.stats.rebounds },
        { label: "AST", value: player.stats.assists },
        { label: "STL", value: player.stats.steals },
        { label: "FLS", value: player.stats.fouls },
      ].map((stat, idx) => (
        <div
          key={stat.label}
          className="rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 p-3 text-center ring-1 ring-slate-200/70 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          style={{ animation: `fade-in-up 0.6s ease-out ${0.05 * idx}s both` }}
        >
          <p className="text-xs font-semibold text-slate-500 tracking-wider">
            {stat.label}
          </p>
          <p className="mt-2 text-2xl font-bold text-purple-700">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  </div>
) : (
  <div className="rounded-2xl bg-white/80 backdrop-blur p-6 shadow-sm ring-1 ring-slate-200/70" style={{ animation: "fade-in-up 0.7s ease-out 0.2s both" }}>
    <p className="text-sm text-slate-500">
      Stats will appear as games are played.
    </p>
  </div>
)}
      </section>
    </main>
  );
}