import * as React from 'react';
import { useColorScheme } from 'react-native';

import { useThemeMode } from '@rneui/themed';

export function ColorScheme({ children }: React.PropsWithChildren<object>) {
  const colorMode = useColorScheme();
  const { setMode, mode } = useThemeMode();

  React.useEffect(() => {
    // If you want a proper deps array, you have to be careful not to just
    // blindly setMode, because that will change the value of setMode
    const targetMode = colorMode === 'dark' ? 'dark' : 'light';
    if (mode !== targetMode) {
      setMode(targetMode);
    }
  }, [colorMode, mode, setMode]);

  return <>{children}</>;
}
