import { useEffect } from "react";

import { isDevelopmentBuild, registerDevMenuItems } from "expo-dev-client";
import { useRouter } from "expo-router";

export const useDevMenu = () => {
  const router = useRouter();

  useEffect(() => {
    if (!isDevelopmentBuild()) return;

    registerDevMenuItems([
      {
        name: "Open storybook",
        shouldCollapse: true,
        callback: () => {
          router.push("/storybook");
        },
      },
    ]);
  }, [router]);
};
