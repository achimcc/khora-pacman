export const levels = [
  {
    name: "",
    field: `
            XXXXXXXXXXX
            X  .....  X
            X     ..2 X
            X   0     X
            X      1  X
            XXXXXXXXXXX
        `,
    gosts: {
      "1": {
        kind: "Blinky",
        direction: "Up",
      },
      "2": {
        kind: "Blinky",
        direction: "Up",
      },
    },
    player: {
      direction: "Down",
    },
  },
];
