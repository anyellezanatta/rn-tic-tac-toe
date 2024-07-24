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
  if (checkSequence(diagonal1)) {
    return diagonal1[0];
  }

  const diagonal2 = [gameState[0]![2], gameState[1]![1], gameState[2]![0]];
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
      const line = checkLines(gameState);
      const column = checkColumns(gameState);
      const diagonal = checkDiagonals(gameState);
      const isWinner = line || column || diagonal;

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
