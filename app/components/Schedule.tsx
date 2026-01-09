import { Calendar, MapPin, Trophy } from "lucide-react";

interface Game {
  id: number;
  date: string; // e.g. "Sat 1/10"
  time: string; // e.g. "2:30 PM"
  opponent: string;
  location: string; // "Home" | "Away" (keep if you want)
  venue: string;
  isHome: boolean;
  result?: { score: string; won: boolean };
}

const games: Game[] = [
  {
    id: 1,
    date: "Sat 12/13",
    time: "6:00 PM",
    opponent: "St Bridget's",
    location: "Home",
    venue: "Benedictine",
    isHome: true,
    result: { score: "22-15", won: true },
  },
  {
    id: 2,
    date: "Tue 12/16",
    time: "5:00 PM",
    opponent: "Our Lady of Lourdes",
    location: "Away",
    venue: "Our Lady of Lourdes",
    isHome: false,
    result: { score: "12-11", won: false },
  },
  {
    id: 3,
    date: "Sat 1/10",
    time: "2:30 PM",
    opponent: "St Benedict's",
    location: "Away",
    venue: "Our Lady of Lourdes",
    isHome: false,
  },
  {
    id: 4,
    date: "Sat 1/17",
    time: "3:00 PM",
    opponent: "St Bridget's",
    location: "Away",
    venue: "Veritas",
    isHome: false,
  },
  {
    id: 5,
    date: "Sat 1/24",
    time: "8:30 AM",
    opponent: "St Mary's",
    location: "Away",
    venue: "St Benedictine Main Floor",
    isHome: false,
  },
  {
    id: 6,
    date: "Sat 1/31",
    time: "2:00 PM",
    opponent: "Veritas",
    location: "Away",
    venue: "Veritas",
    isHome: false,
  },
];

function DateBadge({
  date,
  variant,
}: {
  date: string;
  variant: "upcoming" | "win" | "loss";
}) {
  const [dow, md] = date.split(" ");
  const [m, d] = (md ?? "").split("/");

  const color =
    variant === "win"
      ? "bg-green-600"
      : variant === "loss"
      ? "bg-red-600"
      : "bg-purple-600";

  return (
    <div
      className={[
        "flex h-14 w-14 flex-col items-center justify-center rounded-full text-white flex-shrink-0",
        color,
      ].join(" ")}
    >
      <div className="text-[11px] font-semibold leading-none opacity-90">
        {dow}
      </div>
      <div className="mt-0.5 text-sm font-semibold leading-none">
        {m}/{d}
      </div>
    </div>
  );
}

export default function Schedule() {
  const completed = games.filter((g) => !!g.result);
  const upcoming = games.filter((g) => !g.result);

  const wins = completed.filter((g) => g.result?.won).length;
  const losses = completed.filter((g) => g.result && !g.result.won).length;

  return (
    <div className="space-y-6">
      {/* Header row like Roster */}
      <div className="flex items-center gap-3">
        <Calendar className="size-8 text-purple-600" />
        <h2 className="text-2xl font-semibold">Game Schedule</h2>
      </div>

      {/* Team Record box (top) */}
      <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Trophy className="size-6 text-purple-600" />
            <div>
              <p className="text-xs font-semibold tracking-wide text-slate-500">
                TEAM RECORD
              </p>
              <p className="text-2xl font-semibold text-slate-900">
                {wins}-{losses}
              </p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-xs font-semibold tracking-wide text-slate-500">
              GAMES PLAYED
            </p>
            <p className="text-sm font-semibold text-slate-900">
              {completed.length}
            </p>
          </div>
        </div>
      </div>

      {/* COMPLETED FIRST */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-slate-500 tracking-wide">
          COMPLETED
        </h3>

        {completed.length === 0 ? (
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70 text-sm text-slate-600">
            No completed games yet.
          </div>
        ) : (
          <div className="grid gap-3">
            {completed.map((game) => (
              <div
                key={game.id}
                className="
                  group
                  rounded-2xl
                  bg-white
                  p-4
                  shadow-sm
                  ring-1 ring-slate-200/70
                  transition-all duration-200
                  hover:-translate-y-1
                  hover:shadow-lg
                  hover:ring-purple-300
                "
              >
                <div className="flex items-center gap-4">
                  {/* Badge */}
                  <DateBadge
                    date={game.date}
                    variant={game.result?.won ? "win" : "loss"}
                  />

                  {/* Main */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      {/* Home/Away pill (kept for completed games) */}
                      <span
                        className={[
                          "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1",
                          game.isHome
                            ? "bg-purple-50 text-purple-700 ring-purple-200"
                            : "bg-slate-50 text-slate-700 ring-slate-200",
                        ].join(" ")}
                      >
                        {game.isHome ? "Home" : "Away"}
                      </span>

                      <span className="text-xs text-slate-500">{game.time}</span>
                    </div>

                    <h4 className="mt-2 text-lg font-semibold text-slate-900 transition-colors group-hover:text-purple-700">
                      vs {game.opponent}
                    </h4>

                    <div className="mt-1 flex items-center gap-2 text-sm text-slate-600">
                      <MapPin className="size-4 text-slate-400" />
                      <span>{game.venue}</span>
                    </div>
                  </div>

                  {/* Right-side: Result (moved here like Jersey column) */}
                  <div className="hidden sm:block text-right">
                    <div className="text-xs text-slate-500">Result</div>

                    <div
                      className={[
                        "mt-1 inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ring-1",
                        game.result?.won
                          ? "bg-green-50 text-green-700 ring-green-200"
                          : "bg-red-50 text-red-700 ring-red-200",
                      ].join(" ")}
                    >
                      {game.result?.won ? "W" : "L"} • {game.result?.score}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* UPCOMING SECOND */}
      <div className="space-y-3 pt-2">
        <h3 className="text-sm font-semibold text-slate-500 tracking-wide">
          UPCOMING
        </h3>

        {upcoming.length === 0 ? (
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70 text-sm text-slate-600">
            No upcoming games listed yet.
          </div>
        ) : (
          <div className="grid gap-3">
            {upcoming.map((game) => (
              <div
                key={game.id}
                className="
                  group
                  rounded-2xl
                  bg-white
                  p-4
                  shadow-sm
                  ring-1 ring-slate-200/70
                  transition-all duration-200
                  hover:-translate-y-1
                  hover:shadow-lg
                  hover:ring-purple-300
                "
              >
                <div className="flex items-center gap-4">
                  {/* Left badge */}
                  <DateBadge date={game.date} variant="upcoming" />

                  {/* Main */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={[
                          "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1",
                          game.isHome
                            ? "bg-purple-50 text-purple-700 ring-purple-200"
                            : "bg-slate-50 text-slate-700 ring-slate-200",
                        ].join(" ")}
                      >
                        {game.isHome ? "Home" : "Away"}
                      </span>

                      <span className="text-xs text-slate-500">{game.time}</span>
                    </div>

                    <h4 className="mt-2 text-lg font-semibold text-slate-900 transition-colors group-hover:text-purple-700">
                      vs {game.opponent}
                    </h4>

                    <div className="mt-1 flex items-center gap-2 text-sm text-slate-600">
                      <MapPin className="size-4 text-slate-400" />
                      <span>{game.venue}</span>
                    </div>
                  </div>

                  {/* Right side: Jersey Color */}
                  <div className="hidden sm:block text-right">
                    <div className="text-xs text-slate-500">Jersey</div>
                    <div className="text-sm font-semibold text-slate-900">
                      TBD
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}