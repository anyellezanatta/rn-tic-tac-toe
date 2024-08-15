import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Portal } from "@gorhom/portal";

import { GameHeader } from "@/features/game/components/GameHeader/GameHeader";
import { GamePopUp } from "@/features/game/components/GamePopUp";
import { GameTable } from "@/features/game/components/GameTable";
import { RestartPopUp } from "@/features/game/components/RestartPopUp";
import { Scoreboard } from "@/features/game/components/Scoreboard";

const GamePage = () => {
  const { top: marginTop } = useSafeAreaInsets();

  return (
    <View style={{ marginTop, justifyContent: "center", flex: 1 }}>
      <GameHeader style={{ position: "absolute", top: 0, width: "100%" }} />
      <GameTable />
      <Scoreboard />
      <Portal>
        <GamePopUp />
        <RestartPopUp />
      </Portal>
    </View>
  );
};

export default GamePage;
