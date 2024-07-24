import type { OpponentType, PlayerMark } from "@/features/game/store/gameSlice";
import {
  gameRestart,
  assignPlayer1,
  quitGame,
  selectGamePlayer1Mark,
  selectGameScore,
  selectGameTable,
  selectGameTurn,
  selectOpponent,
  selectGameWinner,
  playTurn,
  assignOpponent,
} from "@/features/game/store/gameSlice";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";

export const useGame = () => {
  const dispatch = useAppDispatch();
  const turn = useAppSelector(selectGameTurn);
  const table = useAppSelector(selectGameTable);
  const score = useAppSelector(selectGameScore);
  const player1Mark = useAppSelector(selectGamePlayer1Mark);
  const winner = useAppSelector(selectGameWinner);
  const opponent = useAppSelector(selectOpponent);

  const play = (line: number, column: number) => {
    dispatch(playTurn({ line, column }));
  };

  const quit = () => {
    dispatch(quitGame());
  };

  const restart = () => {
    dispatch(gameRestart());
  };

  const pickPlayer1Mark = (mark: PlayerMark) => {
    dispatch(assignPlayer1({ mark }));
  };

  const newGame = (opponent: OpponentType) => {
    dispatch(assignOpponent({ opponent }));
  };

  return {
    turn,
    table,
    score,
    player1Mark,
    winner,
    opponent,
    play,
    restart,
    quit,
    pickPlayer1Mark,
    newGame,
  };
};
