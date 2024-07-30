import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import { startAppListening } from "@/store/listenerMiddleware";
import type { RootState } from "@/store/store";

export type PlayerMark = "X" | "O";

export type OpponentType = "p2" | "cpu";

export type PlayerType = "p1" | OpponentType;

export type GameState = {
  gameState: PlayerType[][];
  score: { player1: number; opponent: number; ties: number };
  player1Mark?: PlayerMark;
  opponent?: OpponentType;
  turn?: PlayerType;
  winner?: PlayerType | "tie";
};

const initialState: GameState = {
  gameState: Array(3).fill(Array(3).fill(undefined)),
  score: { player1: 0, opponent: 0, ties: 0 },
  player1Mark: undefined,
  opponent: undefined,
  turn: undefined,
  winner: undefined,
};

const changeTurn = (turn: PlayerType, opponent: OpponentType): PlayerType => {
  return turn === "p1" ? opponent : "p1";
};

const checkTie = (gameState: PlayerType[][]): boolean => {
  return gameState.every((line) => line.every((cell) => cell !== undefined));
};

export const gameReducer = createSlice({
  name: "game",
  initialState,
  reducers: {
    assignPlayer1: (state, action: PayloadAction<{ mark: PlayerMark }>) => {
      state.player1Mark = action.payload.mark;
    },
    assignOpponent: (
      state,
      action: PayloadAction<{ opponent: OpponentType }>,
    ) => {
      state.opponent = action.payload.opponent;
      if (state.player1Mark === undefined) {
        state.player1Mark = "X";
      }
      state.turn = state.player1Mark === "X" ? "p1" : action.payload.opponent;
    },
    playTurn: (
      state,
      action: PayloadAction<{ line: number; column: number }>,
    ) => {
      if (state.turn === "cpu") return;

      const { line, column } = action.payload;

      state.gameState[line]![column] = state.turn!;
    },
    cpuPlayTurn: (state) => {
      const { gameState } = state;

      if (checkTie(gameState)) return;

      const emptyCells: [number, number][] = [];

      state.gameState.forEach((line, i) => {
        line.forEach((cell, j) => {
          if (cell === undefined) {
            emptyCells.push([i, j]);
          }
        });
      });

      if (emptyCells.length === 0) {
        return;
      }

      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      const [line, column] = emptyCells[randomIndex]!;
      state.gameState[line]![column] = "cpu";
    },
    gameRestart: (state) => {
      state.winner = undefined;
      state.gameState = initialState.gameState;
      state.turn = state.player1Mark === "X" ? "p1" : state.opponent;
    },
    quitGame: (state) => {
      state.winner = initialState.winner;
      state.gameState = initialState.gameState;
      state.turn = initialState.turn;
      state.score = initialState.score;
      state.player1Mark = initialState.player1Mark;
      state.opponent = initialState.opponent;
    },
    checkWinner: (state) => {
      if (state.winner) return;

      const { gameState } = state;

      const lines: number[][][] = [];

      // Add rows and columns to lines
      for (let i = 0; i < 3; i++) {
        lines.push([
          [i, 0],
          [i, 1],
          [i, 2],
        ]); // Rows
        lines.push([
          [0, i],
          [1, i],
          [2, i],
        ]); // Columns
      }

      // Add diagonals to lines
      lines.push([
        [0, 0],
        [1, 1],
        [2, 2],
      ]);
      lines.push([
        [0, 2],
        [1, 1],
        [2, 0],
      ]);

      const winner = lines.reduce<PlayerType | undefined>((winner, line) => {
        if (winner) return winner;

        // const [[x0, y0], [x1, y1], [x2, y2]] = line;
        const [first, second, third] = line!;

        // Ensure that each coordinate is a pair of numbers
        const [x0, y0] = first!;
        const [x1, y1] = second!;
        const [x2, y2] = third!;

        if (
          gameState[x0!]![y0!] === gameState[x1!]![y1!] &&
          gameState[x1!]![y1!] === gameState[x2!]![y2!] &&
          gameState[x0!]![y0!] !== undefined
        ) {
          return gameState[x0!]![y0!];
        }

        return undefined;
      }, undefined);

      if (winner) {
        state.winner = winner;
        if (winner === "p1") {
          state.score.player1 += 1;
        } else {
          state.score.opponent += 1;
        }
      } else {
        if (checkTie(gameState)) {
          state.winner = "tie";
          state.score.ties += 1;
        }

        state.turn = changeTurn(state.turn!, state.opponent!);
      }
    },
  },
});

export const {
  assignPlayer1,
  assignOpponent,
  playTurn,
  cpuPlayTurn,
  gameRestart,
  quitGame,
  checkWinner,
} = gameReducer.actions;

export const selectGameTurn = (state: RootState) => state.game.turn;
export const selectGameTable = (state: RootState) => state.game.gameState;
export const selectOpponent = (state: RootState) => state.game.opponent;
export const selectGameScore = (state: RootState) => state.game.score;
export const selectGameWinner = (state: RootState) => state.game.winner;
export const selectGamePlayer1Mark = (state: RootState) =>
  state.game.player1Mark;

startAppListening({
  predicate: (_action, currentState, previousState) => {
    return (
      currentState.game.turn === "cpu" &&
      previousState.game.turn !== "cpu" &&
      !currentState.game.winner
    );
  },
  effect: async (_action, { dispatch, delay }) => {
    await delay(1000);

    dispatch(cpuPlayTurn());
  },
});

startAppListening({
  matcher: isAnyOf(playTurn, cpuPlayTurn),
  effect: (_action, { dispatch }) => {
    dispatch(checkWinner());
  },
});
