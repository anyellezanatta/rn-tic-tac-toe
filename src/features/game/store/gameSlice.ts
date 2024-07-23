import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

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

const checkSequence = (sequence: (PlayerType | undefined)[]): boolean => {
  return sequence.every((cell) => cell === sequence[0]);
};

const checkLines = (gameState: PlayerType[][]): PlayerType | undefined => {
  let winner: PlayerType | undefined = undefined;

  gameState.forEach((line) => {
    if (!winner) {
      if (checkSequence(line)) {
        winner = line[0];
        return winner;
      }
    }
  });

  return winner;
};

const checkColumns = (gameState: PlayerType[][]): PlayerType | undefined => {
  let column: (PlayerType | undefined)[] = [];
  for (let i = 0; i < 3; i++) {
    column = [gameState[0]![i], gameState[1]![i], gameState[2]![i]];
    if (checkSequence(column)) {
      return column[0];
    }
  }

  return undefined;
};

const checkDiagonals = (gameState: PlayerType[][]): PlayerType | undefined => {
  const diagonal1 = [gameState[0]![0], gameState[1]![1], gameState[2]![2]];
  const diagonal2 = [gameState[0]![2], gameState[1]![1], gameState[2]![0]];
  if (checkSequence(diagonal1)) {
    return diagonal1[0];
  }
  if (checkSequence(diagonal2)) {
    return diagonal2[0];
  }
  return undefined;
};

const checkTie = (gameState: PlayerType[][]): boolean => {
  return gameState.every((line) => line.every((cell) => cell !== undefined));
};

export const gameReducer = createSlice({
  name: "game",
  initialState,
  reducers: {
    assignPlayer1: (state, action: PayloadAction<{ symbol: PlayerMark }>) => {
      state.player1Mark = action.payload.symbol;
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
      console.log("playTurn");
      const { line, column } = action.payload;
      const newTable = [...state.gameState];
      if (state.turn !== undefined) {
        newTable[line]![column] = state.turn;
        state.turn = changeTurn(state.turn, state.opponent!);
      }
      state.gameState = newTable;
    },
    gameRestart: (state, action) => {
      state.winner = undefined;
      state.gameState = initialState.gameState;
      state.turn = state.player1Mark === "X" ? "p1" : state.opponent;
    },
    quitGame: (state, action) => {
      state.winner = initialState.winner;
      state.gameState = initialState.gameState;
      state.turn = initialState.turn;
      state.score = initialState.score;
      state.player1Mark = initialState.player1Mark;
      state.opponent = initialState.opponent;
    },
    cpuPlayTurn: (state, action) => {
      if (checkTie(state.gameState)) return;
      const { gameState, opponent } = state;
      const newTable = [...gameState];
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
      console.log("line", line, "column", column);

      newTable[line]![column] = "cpu";

      console.log("newTable", newTable);

      state.turn = changeTurn("cpu", opponent!);
      state.gameState = newTable;
    },
    checkWinner: (state, action) => {
      if (state.winner) return;

      const { gameState } = state;

      const line = checkLines(gameState);
      const column = checkColumns(gameState);
      const diagonal = checkDiagonals(gameState);

      console.log("line", line, "column", column, "diagonal", diagonal);
      const isWinner = line || column || diagonal;
      console.log("isWinner", isWinner);
      if (isWinner) {
        state.winner = isWinner;
        if (isWinner === "p1") {
          state.score.player1 += 1;
        } else {
          state.score.opponent += 1;
        }
      } else {
        if (checkTie(gameState)) {
          state.winner = "tie";
          state.score.ties += 1;
        }
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
  predicate: (action, currentState, previousState) => {
    return currentState.game.turn === "cpu" && !currentState.game.winner;
  },
  effect: (action, listenerApi) => {
    listenerApi.dispatch(cpuPlayTurn({}));
  },
});

startAppListening({
  predicate: (action, currentState, previousState) => {
    return (
      currentState.game.turn !== previousState.game.turn &&
      !currentState.game.winner
    );
  },
  effect: (action, listenerApi) => {
    listenerApi.dispatch(checkWinner({}));
  },
});
