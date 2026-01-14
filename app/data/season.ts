// app/data/season.ts
export interface Game {
  id: number;
  date: string; // e.g. "Sat 1/10"
  time: string; // e.g. "2:30 PM"
  opponent: string;
  location: string; // "Home" | "Away" (keep if you want)
  venue: string;
  isHome: boolean;

  // ✅ new
  jersey?: "Purple" | "White" | "Black" | "Gold" | "Navy" | "Gray";
  directionsUrl?: string;

  result?: { score: string; won: boolean };
}

export const GAMES: Game[] = [
  {
    id: 1,
    date: "Sat 12/13",
    time: "6:00 PM",
    opponent: "St Bridget's",
    location: "Home",
    venue: "Benedictine",
    isHome: true,
    jersey: "Purple",
    directionsUrl: "https://maps.google.com/?q=Benedictine+College+Prep+Richmond+VA",
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
    jersey: "White",
    directionsUrl: "https://maps.google.com/?q=Our+Lady+of+Lourdes+Catholic+School+Richmond+VA",
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
    jersey: "Purple",
    directionsUrl: "https://maps.google.com/?q=Our+Lady+of+Lourdes+Catholic+School+Richmond+VA",
    result: { score: "13-11", won: true },
  },
  {
    id: 4,
    date: "Sat 1/17",
    time: "3:00 PM",
    opponent: "St Bridget's",
    location: "Away",
    venue: "Veritas",
    isHome: false,
    jersey: "Purple",
    directionsUrl: "https://maps.google.com/?q=Veritas+School+Richmond+VA",
  },
  {
    id: 5,
    date: "Sat 1/24",
    time: "8:30 AM",
    opponent: "St Mary's",
    location: "Away",
    venue: "St Benedictine Main Floor",
    isHome: false,
    jersey: "Purple",
    directionsUrl: "https://maps.google.com/?q=St+Benedictine+College+Prep+Richmond+VA",
  },
  {
    id: 6,
    date: "Sat 1/31",
    time: "2:00 PM",
    opponent: "Veritas",
    location: "Away",
    venue: "Veritas",
    isHome: false,
    jersey: "Purple",
    directionsUrl: "https://maps.google.com/?q=Veritas+School+Richmond+VA",
  },
];

export function getSeasonStats() {
  const completed = GAMES.filter((g) => !!g.result);
  const upcoming = GAMES.filter((g) => !g.result);
  const wins = completed.filter((g) => g.result?.won).length;
  const losses = completed.filter((g) => g.result && !g.result.won).length;
  const winPercentage = completed.length > 0 ? Math.round((wins / completed.length) * 100) : 0;

  return {
    wins,
    losses,
    completed,
    upcoming,
    totalGames: GAMES.length,
    gamesPlayed: completed.length,
    gamesRemaining: upcoming.length,
    winPercentage,
  };
}
