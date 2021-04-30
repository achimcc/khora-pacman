import { Level } from "./Level";
import * as level from "./Level";
import { GhostKind } from "./Ghost";
import { Grid, isValidPosition } from "./Grid";
import * as grid from "./Grid";
import { Vector, addVector } from "./Vector";
import { Direction, directionToVector } from "./Direction";

export type Game = {
  grid: Grid;
  player: { pos: Vector; direction: Direction };
  ghosts: { pos: Vector; direction: Direction; ghostKind: GhostKind }[];
};

type Config = { level: Level };

const cellToCell = (cell: level.Cell): grid.Cell =>
  cell.tag === "Ghost" || cell.tag === "Player" ? "Empty" : cell.tag;

const init = ({ level: configLevel }: Config): Game => ({
  grid: configLevel.field.map((row) => row.map(cellToCell)),
  player: {
    pos: level.fieldToPlayerPos(configLevel.field),
    direction: 1 as any,
  },
  ghosts: 1 as any,
});

const timeTick = (game: Game): Game => {
  const nextPosToCheck = addVector(
    game.player.pos,
    directionToVector(game.player.direction)
  );
  const nextPos = isValidPosition(game.grid, nextPosToCheck)
    ? nextPosToCheck
    : game.player.pos;
  const newPlayer = { pos: nextPos, direction: game.player.direction };
  return {
    grid: game.grid,
    player: newPlayer,
    ghosts: game.ghosts,
  };
};

const setDirection = (direction: Direction, game: Game): Game => "TODO" as any;

const pause = (game: Game): Game => "TODO" as any;

const resume = (game: Game): Game => "TODO" as any;
