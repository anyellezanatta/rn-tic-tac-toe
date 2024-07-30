import { describe, expect, it, jest } from "@jest/globals";

import store from "@/store/store";

import {
  assignOpponent,
  assignPlayer1,
  gameRestart,
  playTurn,
  quitGame,
} from "./gameSlice";

describe("gameSlice", () => {
  it("should assign player 1 mark", () => {
    store.dispatch(quitGame());
    store.dispatch(assignPlayer1({ mark: "O" }));

    const { player1Mark } = store.getState().game;
    expect(player1Mark).toBe("O");
  });

  it("should assign opponent", () => {
    store.dispatch(quitGame());
    store.dispatch(assignOpponent({ opponent: "cpu" }));

    const { opponent } = store.getState().game;
    expect(opponent).toBe("cpu");
  });

  it("should set player 1 turn", () => {
    store.dispatch(quitGame());
    store.dispatch(assignPlayer1({ mark: "X" }));
    store.dispatch(assignOpponent({ opponent: "p2" }));

    const { turn } = store.getState().game;
    expect(turn).toBe("p1");
  });

  it("should set opponent turn", () => {
    store.dispatch(quitGame());
    store.dispatch(assignPlayer1({ mark: "O" }));
    store.dispatch(assignOpponent({ opponent: "p2" }));

    const { turn } = store.getState().game;
    expect(turn).toBe("p2");
  });

  it("should play player 1 game turn", () => {
    store.dispatch(quitGame());
    store.dispatch(assignPlayer1({ mark: "X" }));
    store.dispatch(assignOpponent({ opponent: "p2" }));
    store.dispatch(playTurn({ line: 0, column: 0 }));

    const { gameState, turn } = store.getState().game;
    expect(gameState[0]![0]).toBe("p1");
    expect(turn).toBe("p2");
  });

  it("should play player 2 opponent game turn", () => {
    store.dispatch(quitGame());
    store.dispatch(assignPlayer1({ mark: "X" }));
    store.dispatch(assignOpponent({ opponent: "p2" }));
    store.dispatch(playTurn({ line: 0, column: 0 }));
    store.dispatch(playTurn({ line: 0, column: 1 }));

    const { gameState, turn } = store.getState().game;
    expect(gameState[0]![1]).toBe("p2");
    expect(turn).toBe("p1");
  });

  it("should play cpu opponent game turn", async () => {
    store.dispatch(quitGame());
    store.dispatch(assignPlayer1({ mark: "X" }));
    store.dispatch(assignOpponent({ opponent: "cpu" }));
    store.dispatch(playTurn({ line: 0, column: 0 }));

    await jest.runOnlyPendingTimersAsync();

    const { gameState } = store.getState().game;

    expect(gameState[0]![0]).toBe("p1");
    expect(gameState.flatMap((item) => item)).toContain("cpu");
  });

  it("should have a winner", () => {
    store.dispatch(quitGame());
    store.dispatch(assignPlayer1({ mark: "X" }));
    store.dispatch(assignOpponent({ opponent: "p2" }));
    // p1
    store.dispatch(playTurn({ line: 0, column: 0 }));
    // p2
    store.dispatch(playTurn({ line: 0, column: 1 }));
    //p1
    store.dispatch(playTurn({ line: 1, column: 1 }));
    //p2
    store.dispatch(playTurn({ line: 0, column: 2 }));
    //p1
    store.dispatch(playTurn({ line: 2, column: 2 }));

    const { winner, score } = store.getState().game;
    expect(winner).toBe("p1");
    expect(score.player1).toBe(1);
  });

  it("should have a tie", () => {
    store.dispatch(quitGame());
    store.dispatch(assignPlayer1({ mark: "X" }));
    store.dispatch(assignOpponent({ opponent: "p2" }));
    // p1
    store.dispatch(playTurn({ line: 0, column: 0 }));
    // p2
    store.dispatch(playTurn({ line: 0, column: 1 }));
    //p1
    store.dispatch(playTurn({ line: 0, column: 2 }));

    //p2
    store.dispatch(playTurn({ line: 1, column: 1 }));
    //p1
    store.dispatch(playTurn({ line: 1, column: 0 }));
    //p2
    store.dispatch(playTurn({ line: 1, column: 2 }));

    //p1
    store.dispatch(playTurn({ line: 2, column: 1 }));
    //p2
    store.dispatch(playTurn({ line: 2, column: 0 }));
    //p1
    store.dispatch(playTurn({ line: 2, column: 2 }));

    const { winner, score } = store.getState().game;
    expect(winner).toBe("tie");
    expect(score.ties).toBe(1);
  });

  it("should restart the game", () => {
    store.dispatch(quitGame());
    store.dispatch(assignPlayer1({ mark: "X" }));
    store.dispatch(assignOpponent({ opponent: "p2" }));
    // p1
    store.dispatch(playTurn({ line: 0, column: 0 }));
    // p2
    store.dispatch(playTurn({ line: 0, column: 1 }));

    store.dispatch(gameRestart());

    const { gameState, turn, winner } = store.getState().game;
    expect(gameState).toEqual(Array(3).fill(Array(3).fill(undefined)));
    expect(turn).toBe("p1");
    expect(winner).toBeUndefined();
  });
});
