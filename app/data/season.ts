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
  jersey?: "Green" | "White" | "Black" | "Gold" | "Navy" | "Gray";
  directionsUrl?: string;

  result?: { score: string; won: boolean };
}

export const GAMES: Game[] = [
  {
    id: 1,
    date: "Sat 1/31",
    time: "9:00 AM",
    opponent: "STPCS2",
    location: "Home",
    venue: "St. Patrick Catholic School",
    isHome: true,
    jersey: "Green",
    directionsUrl: "https://maps.google.com/?q=St+Patrick+Catholic+School+Richmond+VA",
    result: { score: "32-18", won: true },
  },
  {
    id: 2,
    date: "Sat 2/7",
    time: "8:00 AM",
    opponent: "STPCS2",
    location: "Home",
    venue: "St. Patrick Catholic School",
    isHome: true,
    jersey: "Green",
    directionsUrl: "https://maps.google.com/?q=St+Patrick+Catholic+School+Richmond+VA",
    result: { score: "28-25", won: true },
  },
  {
    id: 3,
    date: "Sat 2/21",
    time: "8:00 AM",
    opponent: "SGGS2",
    location: "Away",
    venue: "St. Gregory the Great",
    isHome: false,
    jersey: "Green",
    directionsUrl: "https://maps.google.com/?q=St+Gregory+the+Great+Richmond+VA",
    result: { score: "24-31", won: false },
  },
  {
    id: 4,
    date: "Sat 2/21",
    time: "12:00 PM",
    opponent: "SOS2",
    location: "Home",
    venue: "St. Patrick Catholic School",
    isHome: true,
    jersey: "Green",
    directionsUrl: "https://maps.google.com/?q=St+Patrick+Catholic+School+Richmond+VA",
    result: { score: "35-22", won: true },
  },
  {
    id: 5,
    date: "Sat 1/31",
    time: "9:00 AM",
    opponent: "STPCS2",
    location: "Home",
    venue: "St. Patrick Catholic School",
    isHome: true,
    jersey: "Green",
    directionsUrl: "https://maps.google.com/?q=St+Patrick+Catholic+School+Richmond+VA",
  },
  {
    id: 6,
    date: "Sat 2/7",
    time: "8:00 AM",
    opponent: "STPCS2",
    location: "Home",
    venue: "St. Patrick Catholic School",
    isHome: true,
    jersey: "Green",
    directionsUrl: "https://maps.google.com/?q=St+Patrick+Catholic+School+Richmond+VA",
  },
  {
    id: 7,
    date: "Sat 2/21",
    time: "8:00 AM",
    opponent: "SGGS2",
    location: "Away",
    venue: "St. Gregory the Great",
    isHome: false,
    jersey: "Green",
    directionsUrl: "https://maps.google.com/?q=St+Gregory+the+Great+Richmond+VA",
  },
  {
    id: 8,
    date: "Sat 2/21",
    time: "12:00 PM",
    opponent: "SOS2",
    location: "Home",
    venue: "St. Patrick Catholic School",
    isHome: true,
    jersey: "Green",
    directionsUrl: "https://maps.google.com/?q=St+Patrick+Catholic+School+Richmond+VA",
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
