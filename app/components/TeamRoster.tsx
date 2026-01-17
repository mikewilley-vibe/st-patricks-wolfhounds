// app/components/TeamRoster.tsx
import Link from "next/link";
import { Users } from "lucide-react";
import { PLAYERS, type Player } from "@/app/data/players";

const COACHES = {
  head: "Katie Howlett-Kramer",
  assistant: "Bobby Howlett",
};

function PlayerCard({ player }: { player: Player }) {
  return (
    <Link href={`/players/${player.id}`}>
      <div
        className="
          group
          rounded-2xl bg-white p-4
          shadow-sm ring-1 ring-slate-200/70
          transition-all duration-300
          hover:-translate-y-2 hover:shadow-lg
          hover:ring-green-400/70
          cursor-pointer
        "
        style={{ animation: "fade-in-up 0.6s ease-out both" }}
      >
        <div className="flex items-center gap-4">
          <div
            className="
              flex size-14 items-center justify-center
              rounded-full bg-gradient-to-br from-green-300 to-green-700
              text-white font-semibold shrink-0
              shadow-sm
              transition-transform duration-300 group-hover:scale-110
            "
          >
            #{player.number}
          </div>

          <div className="min-w-0 flex-1">
            <h4 className="truncate text-base font-semibold text-slate-900 transition-colors duration-300 group-hover:text-green-700">
              {player.name}
            </h4>
            <p className="mt-1 text-sm text-slate-500">
              Grade {player.grade}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function TeamRoster() {
  const grade3 = PLAYERS.filter((p: Player) => p.grade === 3);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Users className="size-8 text-green-700" />
        <h2 className="text-2xl font-semibold">Team Roster</h2>
      </div>

      {/* Coaching Staff */}
      <div className="rounded-2xl bg-gradient-to-br from-green-400 via-green-900 to-green-800 p-5 text-white shadow-sm transition-all duration-300 hover:shadow-lg" style={{ animation: "fade-in-up 0.7s ease-out 0.1s both" }}>
        <h3 className="text-white/90 text-xs font-semibold tracking-wide">
          COACHING STAFF
        </h3>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur transition-all duration-300 hover:bg-white/20 hover:shadow-md" style={{ animation: "fade-in-up 0.6s ease-out 0.15s both" }}>
            <p className="text-xs text-white/80">Head Coach</p>
            <p className="mt-1 text-lg font-semibold">{COACHES.head}</p>
          </div>

          <div className="rounded-xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur transition-all duration-300 hover:bg-white/20 hover:shadow-md" style={{ animation: "fade-in-up 0.6s ease-out 0.2s both" }}>
            <p className="text-xs text-white/80">Assistant Coach</p>
            <p className="mt-1 text-lg font-semibold">{COACHES.assistant}</p>
          </div>
        </div>
      </div>

      {/* Grade 3 */}
      <div className="space-y-3">
        <div className="flex items-center justify-between border-b-2 border-green-200 pb-3">
          <h3 className="text-sm font-bold tracking-widest text-green-800 uppercase">
            3RD Grade
          </h3>
          <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">{grade3.length} players</span>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {grade3.map((p: Player) => (
            <PlayerCard key={p.id} player={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
