// app/data/players.ts
export type PlayerStats = {
  points: number;
  rebounds: number;
  assists: number;
  steals: number;
  fouls: number;
};
export type Player = {
  id: number;
  number: number;
  name: string;
  grade: 3 | 7 | 8;
  position?: string;
  bio?: string;
  stats?: PlayerStats; // 👈 new
};

export const PLAYERS: Player[] = [
  { id: 1, number: 31, name: "Player #31", grade: 3,
    stats: {
      points: 7,
      rebounds: 6,
      assists: 7,
      steals: 6,
      fouls: 7, }, },
  { id: 2, number: 2, name: "Player #2", grade: 3,
    stats: {
      points: 6,
      rebounds: 7,
      assists: 6,
      steals: 7,
      fouls: 6, }, },
  { id: 3, number: 21, name: "Player #21", grade: 3,
    stats: {
      points: 7,
      rebounds: 6,
      assists: 7,
      steals: 6,
      fouls: 7, }, },
  { id: 4, number: 42, name: "Player #42", grade: 3,
    stats: {
      points: 6,
      rebounds: 7,
      assists: 6,
      steals: 7,
      fouls: 6, }, },
  { id: 5, number: 8, name: "Player #8", grade: 3,
    stats: {
      points: 7,
      rebounds: 6,
      assists: 7,
      steals: 6,
      fouls: 7, }, },
  { id: 6, number: 0, name: "Player #0", grade: 3,
    stats: {
      points: 6,
      rebounds: 7,
      assists: 6,
      steals: 7,
      fouls: 6, }, },
  { id: 7, number: 15, name: "Player #15", grade: 3,
    stats: {
      points: 7,
      rebounds: 6,
      assists: 7,
      steals: 6,
      fouls: 7, }, },
  { id: 8, number: 24, name: "Player #24", grade: 3,
    stats: {
      points: 6,
      rebounds: 7,
      assists: 6,
      steals: 7,
      fouls: 6, }, },
  { id: 9, number: 43, name: "Player #43", grade: 3,
    stats: {
      points: 7,
      rebounds: 6,
      assists: 7,
      steals: 6,
      fouls: 7, }, },
  { id: 10, number: 5, name: "Player #5", grade: 3,
    stats: {
      points: 6,
      rebounds: 7,
      assists: 6,
      steals: 7,
      fouls: 6, }, },
  { id: 11, number: 17, name: "Player #17", grade: 3, position: "PG",
    stats: {
      points: 7,
      rebounds: 6,
      assists: 7,
      steals: 6,
      fouls: 7, }, },
  { id: 12, number: 23, name: "Player #23", grade: 3, position: "F",
    stats: {
      points: 6,
      rebounds: 7,
      assists: 6,
      steals: 7,
      fouls: 6, },
    },
  { id: 13, number: 34, name: "Player #34", grade: 3, position: "PG",
    stats: {
      points: 7,
      rebounds: 6,
      assists: 7,
      steals: 6,
      fouls: 7, },
     },
];

export function getPlayerById(id: number) {
  return PLAYERS.find((p) => p.id === id);
}