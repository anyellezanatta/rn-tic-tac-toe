import { PopUp } from "@/components/PopUp";
import { Text } from "@/components/Text";
import { useGame } from "@/features/game/hooks/useGame";

export const RestartPopUp = () => {
  const { restart } = useGame();

  const handleCancel = () => {};

  return (
    <PopUp
      buttonLeftText="NO, CANCEL"
      buttonRightText="YES, RESTART"
      onButtonLeftPress={handleCancel}
      onButtonRightPress={restart}>
      <Text color="silver" variant="hm">
        RESTART GAME?
      </Text>
    </PopUp>
  );
};
