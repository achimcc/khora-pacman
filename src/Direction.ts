import { Vector} from './Vector'

export type Direction = "Up" | "Right" | "Down" | "Left"

export const directionToVector = (direction:Direction): Vector => {
    switch(direction) {
        case 'Up': return [0,-1];
        case 'Right': return [1,0];
        case 'Left': return [-1,0];
        case 'Down': return [0,1];
    }
}