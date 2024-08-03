import "@/theme/unistyles";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { PortalProvider } from "@gorhom/portal";
import { ThemeProvider } from "@react-navigation/native";

import { useAppLoading } from "@/hooks/useAppLoading";
import { useDevMenu } from "@/hooks/useDevMenu";
import store from "@/store/store";
import { DarkNavigationTheme } from "@/theme/navigation";

const AppLayout = () => {
  useDevMenu();

  const { isLoaded, isError } = useAppLoading();

  if (!isLoaded && !isError) {
    return null;
  }

  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <ThemeProvider value={DarkNavigationTheme}>
        <PortalProvider>
          <SafeAreaProvider>
            <Stack screenOptions={{ headerShown: false }} />
          </SafeAreaProvider>
        </PortalProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default AppLayout;
