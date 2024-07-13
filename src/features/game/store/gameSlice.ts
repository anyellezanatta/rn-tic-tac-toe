import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type { AppThunk, RootState } from "@/store/store";

export type GameBoard = "X" | "O" | undefined;

export type GameType = "vsCPU" | "vsPlayer";

export type Player = { board: GameBoard; score: number };

export type Turn = { board: GameBoard; count: number };

export type GameState = {
  gameType: GameType;
  player1: Player;
  player2: Player;
  ties: number;
  table: GameBoard[][];
  turn: Turn;
  winner?: Player;
};

const initialState: GameState = {
  gameType: "vsCPU",
  player1: { board: "X", score: 0 },
  player2: { board: "O", score: 0 },
  ties: 0,
  turn: { board: "X", count: 0 },
  table: [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
  ],
};

export const performPlay =
  (args: { line: number; column: number }): AppThunk =>
  (dispatch, getState) => {
    const { line, column } = args;
    const gameType = getState().game.gameType;

    if (gameType === "vsPlayer") {
      dispatch(playTurn({ line, column }));
      dispatch(checkWinner({ line, column }));
      dispatch(turnSet({}));
    }
    if (gameType === "vsCPU") {
      dispatch(playTurn({ line, column }));
      dispatch(checkWinner({ line, column }));
      dispatch(turnSet({}));
      dispatch(cpuPlayTurn({}));
      // TODO: Return line and column from cpuPlayTurn
      dispatch(checkWinner({ line, column }));
      dispatch(turnSet({}));
    }
  };

export const gameReducer = createSlice({
  name: "game",
  initialState,
  reducers: {
    player1Set: (state, action) => {
      state.player1 = action.payload;
    },
    player2Set: (state, action) => {
      state.player2 = action.payload;
    },
    gameTypeSet: (state, action) => {
      state.gameType = action.payload;
    },
    turnSet: (state, action) => {
      state.turn = {
        board: state.turn.board === "X" ? "O" : "X",
        count: state.turn.count + 1,
      };
    },
    scoreSet: (state, action) => {},
    // TODO: Implement cpuPlayTurn more intelligently
    cpuPlayTurn: (state, action) => {
      const newTable = [...state.table];
      const emptyCells: [number, number][] = [];
      newTable.forEach((line, i) => {
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
      newTable[line]![column] = state.turn.board;
      state.table = newTable;
    },
    playTurn: (
      state,
      action: PayloadAction<{ line: number; column: number }>,
    ) => {
      const { line, column } = action.payload;
      const newTable = [...state.table];
      newTable[line]![column] = state.turn.board;
      state.table = newTable;
    },
    gameRestart: (state, action) => {
      state.table = initialState.table;
      state.turn = { board: initialState.turn.board, count: state.turn.count };
    },
    checkWinner: (state, action) => {
      const { line, column } = action.payload;

      const checkLine = (line: number): GameBoard | undefined => {
        if (
          state.table[line]![0] === state.table[line]![1] &&
          state.table[line]![1] === state.table[line]![2] &&
          state.table[line]![0] !== undefined &&
          state.table[line]![1] !== undefined &&
          state.table[line]![2] !== undefined
        ) {
          return state.table[line]![0];
        }
      };

      const checkColumn = (column: number): GameBoard | undefined => {
        if (
          state.table[0]![column] === state.table[1]![column] &&
          state.table[1]![column] === state.table[2]![column] &&
          state.table[0]![column] !== undefined &&
          state.table[1]![column] !== undefined &&
          state.table[2]![column] !== undefined
        ) {
          return state.table[0]![column];
        }
      };

      const checkDiagonal = (): GameBoard | undefined => {
        if (
          state.table[0]![0] === state.table[1]![1] &&
          state.table[1]![1] === state.table[2]![2] &&
          state.table[0]![0] !== undefined &&
          state.table[1]![1] !== undefined &&
          state.table[2]![2] !== undefined
        ) {
          return state.table[0]![0];
        }
        if (
          state.table[0]![2] === state.table[1]![1] &&
          state.table[1]![1] === state.table[2]![0] &&
          state.table[0]![2] !== undefined &&
          state.table[1]![1] !== undefined &&
          state.table[2]![0] !== undefined
        ) {
          return state.table[0]![2];
        }
      };

      const winnerLine = checkLine(line);
      const winnerColumn = checkColumn(column);
      const winnerDiagonal = checkDiagonal();

      const isWinner = winnerLine || winnerColumn || winnerDiagonal;
      if (isWinner) {
        if (
          (state.player1.board === "X" && state.turn.board === "X") ||
          (state.player1.board === "O" && state.turn.board === "O")
        ) {
          state.player1.score++;
          state.winner = state.player1;
        }
        if (
          (state.player2.board === "O" && state.turn.board === "O") ||
          (state.player2.board === "X" && state.turn.board === "X")
        ) {
          state.player2.score++;
          state.winner = state.player2;
        }
      }
    },
  },
});

export const {
  player1Set,
  player2Set,
  gameTypeSet,
  playTurn,
  gameRestart,
  checkWinner,
  turnSet,
  cpuPlayTurn,
} = gameReducer.actions;

export const selectGameTurn = (state: RootState) => state.game.turn;
export const selectGameTable = (state: RootState) => state.game.table;
export const selectGameType = (state: RootState) => state.game.gameType;
