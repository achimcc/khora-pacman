import {GhostKind} from "./Ghost"

type Cell = 'Wall' | 'Coin' | 'Empty' | GhostKind | "Player"

export type LevelSpec = {
    name: string;
    field: string
}

export type Level = {
    field: Cell[][];
    ghosts: {kind: GhostKind, position: [number, number]}[]
}

const parseLevelSpec = (levelSpec: LevelSpec): Level | null => "TODO" as any

