import { Level } from "./Level"
import { GhostKind } from "./Ghost"

export type Game = {
    grid: Cell[][];
    player: { pos: Position, direction: Direction },
    ghosts: { pos: Position, direction: Direction, ghostKind: GhostKind }[]
}

type Position = [number, number]

type Direction = "Up" | "Right" | "Down" | "Left"

type Cell = 'Wall' | 'Coin' | 'Empty'

type Config = { level: Level }

const init = ({ level }: Config): Game => "TODO" as any

const timeTick = (game: Game): Game => "TODO" as any

const setDirection = (direction: Direction, game: Game): Game => "TODO" as any

const pause = (game: Game): Game => "TODO" as any

const resume = (game: Game): Game => "TODO" as any