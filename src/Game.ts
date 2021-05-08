import { Level } from "./Level";
import * as level from "./Level";
import { GhostKind } from "./Ghost";
import { Grid, isValidPosition } from "./Grid";
import * as grid from "./Grid";
import { Vector, addVector } from "./Vector";
import { Direction, directionToVector } from "./Direction";

export type Game = Level;

type Config = { level: Level };

const init = ({ level: configLevel }: Config): Game => configLevel;

const timeTick = (game: Game): Game => {
  const nextPosToCheck = addVector(
    game.player.position,
    directionToVector(game.player.direction)
  );
  const nextPos = isValidPosition(game.field, nextPosToCheck)
    ? nextPosToCheck
    : game.player.position;
  const newPlayer = { position: nextPos, direction: game.player.direction };
  return {
    field: game.field,
    player: newPlayer,
    ghosts: game.ghosts,
  };
};

const setDirection = (direction: Direction, game: Game): Game => "TODO" as any;

const pause = (game: Game): Game => "TODO" as any;

const resume = (game: Game): Game => "TODO" as any;
