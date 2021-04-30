import { GhostKind } from "./Ghost";
import { Vector } from "./Vector";

export const fieldToPlayerPos = (field: Cell[][]): Vector => "TODO" as any;
export type Cell =
  | { tag: "Wall" }
  | { tag: "Coin" }
  | { tag: "Ghost"; ind: number }
  | { tag: "Empty" }
  | { tag: "Player" };
export type LevelSpec = {
  name: string;
  field: string;
};

export type Level = {
  field: Cell[][];
  ghosts: { kind: GhostKind; position: [number, number] }[];
};

const parseLevelSpec = (levelSpec: LevelSpec): Level | null => "TODO" as any;
