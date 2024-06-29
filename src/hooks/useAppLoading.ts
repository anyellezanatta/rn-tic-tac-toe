import { useEffect } from "react";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export const useAppLoading = () => {
  const [fontsLoaded, fontError] = useFonts({
    "Outfit-Regular": require("../../assets/fonts/Outfit-Regular.ttf"),
    "Outfit-Medium": require("../../assets/fonts/Outfit-Medium.ttf"),
    "Outfit-Bold": require("../../assets/fonts/Outfit-Bold.ttf"),
  });

  useEffect(() => {
    const handleLoadingFinish = async () => {
      if (fontsLoaded || fontError) {
        await SplashScreen.hideAsync();
      }
    };

    handleLoadingFinish();
  }, [fontsLoaded, fontError]);

  return {
    isLoaded: fontsLoaded,
    isError: fontError,
  };
};
