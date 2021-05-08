import { Direction } from "./Direction";
import { GhostKind } from "./Ghost";
import { Vector } from "./Vector";
import { Cell } from "./Grid";

export type LevelSpec = {
  name: string;
  field: string;
  ghosts: {};
};

export type Level = {
  field: Cell[][];
  ghosts: {
    kind: GhostKind;
    position: Vector;
    direction: Direction;
  }[];
  player: {
    position: Vector;
    direction: Direction;
  };
};

const parseLevelSpec = (levelSpec: LevelSpec): Level | null => "TODO" as any;
