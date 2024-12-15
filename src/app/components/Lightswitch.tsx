"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@skeletonlabs/skeleton-react";
import { Moon as IconMoon, Sun as IconSun } from "lucide-react";

const Lightswitch = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mode, setMode] = useState(resolvedTheme === "light");
  const [mounted, setMounted] = useState(false);

  // Distinguish between mounted and unmounted states to prevent hydration errors
  useEffect(() => setMounted(true), []);

  // Update when mode or useTheme context changes
  useEffect(() => {
    setTheme(mode ? "light" : "dark");
  }, [mode, setTheme]);

  // Had component identification error between placeholder and mode switches
  // Eneded up needing keys so React can differentiate between then in the
  // virtual DOM.
  return mounted ? (
    <Switch
      name="mode"
      key="mode"
      controlActive="bg-surface-200"
      checked={mode}
      onCheckedChange={setMode}
      inactiveChild={<IconMoon size="14" />}
      activeChild={<IconSun size="14" />}
    />
  ) : (
    <Switch name="placeholder" key="placeholder" />
  );
};

export default Lightswitch;
