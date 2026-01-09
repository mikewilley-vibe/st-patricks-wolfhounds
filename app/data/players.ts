// app/data/players.ts

export type Player = {
  id: number;
  number: number;
  name: string;
  grade: 7 | 8;
  position?: string;
  bio?: string;
};

export const PLAYERS: Player[] = [
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

export function getPlayerById(id: number) {
  return PLAYERS.find((p) => p.id === id);
}