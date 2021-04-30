import { GhostKind } from "./Ghost";
import { Vector } from "./Vector";

export type Cell = "Wall" | "Coin" | "Empty" | GhostKind | "Player";

export const fieldToPlayerPos = (field: Cell[][]): Vector => "TODO" as any;

export type LevelSpec = {
  name: string;
  field: string;
};

export type Level = {
  field: Cell[][];
  ghosts: { kind: GhostKind; position: [number, number] }[];
};

const parseLevelSpec = (levelSpec: LevelSpec): Level | null => "TODO" as any;
