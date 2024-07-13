import {
  gameRestart,
  performPlay,
  selectGameTable,
  selectGameTurn,
} from "@/features/game/store/gameSlice";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";

export const useGame = () => {
  const dispatch = useAppDispatch();
  const turn = useAppSelector(selectGameTurn);
  const table = useAppSelector(selectGameTable);

  const play = (line: number, column: number) => {
    dispatch(performPlay({ line, column }));
  };

  const restart = () => {
    dispatch(gameRestart({}));
  };

  return { turn, table, play, restart };
};
