import { Users } from "lucide-react";

type Player = {
  id: number;
  number: number;
  name: string;
  grade: 7 | 8;
};

const COACHES = {
  head: "Marti Kandl",
  assistant: "Eddie Bagnell",
};

const PLAYERS: Player[] = [
  { id: 1, number: 1, name: "Adelaide Kandl", grade: 8 },
  { id: 2, number: 25, name: "Aria McLaurin", grade: 8 },
  { id: 3, number: 21, name: "Vienna Thomson", grade: 8 },

  { id: 4, number: 42, name: "Evie Bagnell", grade: 7 },
  { id: 5, number: 8, name: "Charlotte Hogge", grade: 7 },
  { id: 6, number: 0, name: "Pearl Barry", grade: 7 },
  { id: 7, number: 2, name: "Devan Bryant", grade: 7 },
  { id: 8, number: 24, name: "Ellie Montgomery", grade: 7 },
  { id: 9, number: 43, name: "Harper Roberts", grade: 7 },
  { id: 10, number: 0, name: "Zinn Scalin", grade: 7 },
  { id: 11, number: 17, name: "Louise Totton", grade: 7 },
  { id: 12, number: 23, name: "Mary Willey", grade: 7 },
  { id: 13, number: 34, name: "Jaidah Williams", grade: 7 },
];

function PlayerCard({ player }: { player: Player }) {
  return (
    <div
      className="
        group
        rounded-2xl bg-white p-4
        shadow-sm ring-1 ring-slate-200/70
        transition-all duration-200
        hover:-translate-y-1 hover:shadow-lg
        hover:ring-purple-400/70
      "
    >
      <div className="flex items-center gap-4">
        <div
          className="
            flex size-14 items-center justify-center
            rounded-full bg-gradient-to-br from-purple-300 to-indigo-700
            text-white font-semibold shrink-0
            shadow-sm
          "
        >
          #{player.number}
        </div>

        <div className="min-w-0 flex-1">
          <h4 className="truncate text-base font-semibold text-slate-900 transition-colors group-hover:text-purple-800">
            {player.name}
          </h4>
          <p className="mt-1 text-sm text-slate-500">Grade {player.grade}</p>
        </div>
      </div>
    </div>
  );
}

export default function TeamRoster() {
  const grade8 = PLAYERS.filter((p) => p.grade === 8);
  const grade7 = PLAYERS.filter((p) => p.grade === 7);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Users className="size-8 text-purple-700" />
        <h2 className="text-2xl font-semibold">Team Roster</h2>
      </div>

      {/* Coaching Staff */}
      <div className="rounded-2xl bg-gradient-to-br from-purple-400 via-purple-900 to-indigo-800 p-5 text-white shadow-sm">
        <h3 className="text-white/90 text-xs font-semibold tracking-wide">
          COACHING STAFF
        </h3>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur">
            <p className="text-xs text-white/80">Head Coach</p>
            <p className="mt-1 text-lg font-semibold">{COACHES.head}</p>
          </div>

          <div className="rounded-xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur">
            <p className="text-xs text-white/80">Assistant Coach</p>
            <p className="mt-1 text-lg font-semibold">{COACHES.assistant}</p>
          </div>
        </div>
      </div>

      {/* Grade 8 */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold tracking-wide text-purple-800">
            8TH GRADE
          </h3>
          <span className="text-xs text-slate-500">{grade8.length} players</span>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {grade8.map((p) => (
            <PlayerCard key={p.id} player={p} />
          ))}
        </div>
      </div>

      {/* Grade 7 */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold tracking-wide text-purple-800">
            7TH GRADE
          </h3>
          <span className="text-xs text-slate-500">{grade7.length} players</span>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {grade7.map((p) => (
            <PlayerCard key={p.id} player={p} />
          ))}
        </div>
      </div>
    </div>
  );
}