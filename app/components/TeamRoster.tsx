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
  // 8th Graders
  { id: 1, number: 23, name: "Adelaide Kandl", grade: 8 },
  { id: 2, number: 15, name: "Aria McLaurin", grade: 8 },
  { id: 3, number: 32, name: "Vienna Thomson", grade: 8 },

  // 7th Graders
  { id: 4, number: 4, name: "Evie Bagnell", grade: 7 },
  { id: 5, number: 12, name: "Charlotte Hogge", grade: 7 },
  { id: 6, number: 7, name: "Pearl Barry", grade: 7 },
  { id: 7, number: 21, name: "Devan Bryant", grade: 7 },
  { id: 8, number: 10, name: "Ellie Montgomery", grade: 7 },
  { id: 9, number: 5, name: "Harper Roberts", grade: 7 },
  { id: 10, number: 18, name: "Zinn Scalin", grade: 7 },
  { id: 11, number: 14, name: "Louise Totton", grade: 7 },
  { id: 12, number: 3, name: "Mary Willey", grade: 7 },
  { id: 13, number: 11, name: "Jaidah Williams", grade: 7 },
];

function PlayerCard({ player }: { player: Player }) {
  return (
    <div
      className="
        group
        rounded-2xl bg-white p-4
        shadow-sm ring-1 ring-slate-200/70
        transition-all duration-200
        hover:-translate-y-1 hover:shadow-lg hover:ring-purple-300
      "
    >
      <div className="flex items-center gap-4">
        <div className="flex size-14 items-center justify-center rounded-full bg-purple-600 text-white font-semibold shrink-0">
          #{player.number}
        </div>

        <div className="min-w-0 flex-1">
          <h4 className="truncate text-base font-semibold text-slate-900 transition-colors group-hover:text-purple-700">
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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Users className="size-8 text-purple-600" />
        <h2 className="text-2xl font-semibold">Team Roster</h2>
      </div>

      {/* Coaching Staff */}
      <div className="rounded-2xl bg-gradient-to-r from-purple-600 to-purple-700 p-5 text-white shadow-sm">
        <h3 className="text-white/95 text-sm font-semibold tracking-wide">COACHING STAFF</h3>

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
          <h3 className="text-sm font-semibold tracking-wide text-slate-500">8TH GRADE</h3>
          <span className="text-xs text-slate-500">{grade8.length} players</span>
        </div>

        <div className="grid gap-3">
          {grade8.map((p) => (
            <PlayerCard key={p.id} player={p} />
          ))}
        </div>
      </div>

      {/* Grade 7 */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold tracking-wide text-slate-500">7TH GRADE</h3>
          <span className="text-xs text-slate-500">{grade7.length} players</span>
        </div>

        <div className="grid gap-3">
          {grade7.map((p) => (
            <PlayerCard key={p.id} player={p} />
          ))}
        </div>
      </div>
    </div>
  );
}