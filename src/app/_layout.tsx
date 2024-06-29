import "@/theme/unistyles";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { useAppLoading } from "@/hooks/useAppLoading";
import { useDevMenu } from "@/hooks/useDevMenu";

const AppLayout = () => {
  useDevMenu();

  const { isLoaded, isError } = useAppLoading();

  if (!isLoaded && !isError) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaProvider>
    </>
  );
};

export default AppLayout;
