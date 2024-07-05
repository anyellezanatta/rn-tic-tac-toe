import "@/theme/unistyles";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "@react-navigation/native";

import { useAppLoading } from "@/hooks/useAppLoading";
import { useDevMenu } from "@/hooks/useDevMenu";
import { DarkNavigationTheme } from "@/theme/navigation";

const AppLayout = () => {
  useDevMenu();

  const { isLoaded, isError } = useAppLoading();

  if (!isLoaded && !isError) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />
      <ThemeProvider value={DarkNavigationTheme}>
        <SafeAreaProvider>
          <Stack screenOptions={{ headerShown: false }} />
        </SafeAreaProvider>
      </ThemeProvider>
    </>
  );
};

export default AppLayout;
