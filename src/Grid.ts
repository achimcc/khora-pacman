import { Vector } from './Vector'

type Cell = 'Wall' | 'Coin' | 'Empty'

export type Grid= Cell[][];

const size = (grid: Grid):Vector => {
    const sizeX = grid.length;
    const sizeY = sizeX === 0 ? 0 : (grid[0] as Array<Cell>).length;
    return [sizeX, sizeY];
}

export const isValidPosition = (grid_: Grid, pos: Vector): boolean => {
    if (pos[0]<0 || pos[1]<0) return false;
    const availableRange = size(grid_);
    if(pos[0]> availableRange[0]-1 || pos[1]> availableRange[1]-1 ) return false;
    if ((grid_[pos[0]] as Array<Cell>)[pos[1]] === 'Wall') return false;
    return true;
}