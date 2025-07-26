import { Color } from "../constants/puzzle";

export type Block = [number, number];

export interface Puzzle {
  id: string;
  size: number;
  hives: Hive[];
  createdAt: Date;
}

export interface Hive {
  color: Color;
  blocks: Block[];
  queen: Block;
}

export type CellState = "empty" | "threatened" | "occupied";
