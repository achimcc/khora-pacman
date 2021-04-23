import { Level } from "./Level"
import { GhostKind } from "./Ghost"
import { Grid, Cell } from "./Grid"
import * as grid from "./Grid"
import { Vector, addVector } from './Vector'

export type Game = {
    grid: Grid;
    player: { pos: Vector, direction: Direction },
    ghosts: { pos: Vector, direction: Direction, ghostKind: GhostKind }[]
}

type Direction = "Up" | "Right" | "Down" | "Left"



type Config = { level: Level }

const init = ({ level }: Config): Game => "TODO" as any

const directionToVector = (direction:Direction): Vector => {
    switch(direction) {
        case 'Up': return [0,-1];
        case 'Right': return [1,0];
        case 'Left': return [-1,0];
        case 'Down': return [0,1];
    }
}

const isValidPosition = (grid_: Grid, pos: Vector): boolean => {
    if (pos[0]<0 || pos[1]<0) return false;
    const availableRange = grid.size(grid_);
    if(pos[0]> availableRange[0]-1 || pos[1]> availableRange[1]-1 ) return false;
    if ((grid_[pos[0]] as Array<Cell>)[pos[1]] === 'Wall') return false;
    return true;
}

const timeTick = (game: Game): Game => {
   const nextPosToCheck = addVector(game.player.pos, directionToVector(game.player.direction));
   const nextPos = isValidPosition(game.grid, nextPosToCheck) ? nextPosToCheck : game.player.pos;
   const newPlayer = {pos: nextPos, direction: game.player.direction}; 
   return {
       grid: game.grid,
       player: newPlayer,
       ghosts: game.ghosts,
   }   
}

const setDirection = (direction: Direction, game: Game): Game => "TODO" as any

const pause = (game: Game): Game => "TODO" as any

const resume = (game: Game): Game => "TODO" as any