import * as React from 'react';

import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ParamListBase,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { useTheme } from '@rneui/themed';

import { trackScreen } from '../analytics';

export function NavigationContainerWithAnalytics<Routes extends ParamListBase>({
  children,
}: React.PropsWithChildren<object>) {
  const { theme } = useTheme();
  const routeNameRef = React.useRef<string>();
  const navigationRef = useNavigationContainerRef<Routes>();

  const navTheme = React.useMemo(
    () => ({
      dark: theme.mode === 'dark',
      colors: {
        ...(theme.mode === 'dark' ? DarkTheme : DefaultTheme).colors,
        background: theme.colors.background,
        primary: theme.colors.primary,
        text: theme.colors.black,
      },
    }),
    [theme.mode, theme.colors],
  );

  return (
    <NavigationContainer
      onReady={() => {
        routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;

        if (previousRouteName !== currentRouteName) {
          await trackScreen(currentRouteName);
        }
        routeNameRef.current = currentRouteName;
      }}
      theme={navTheme}>
      {children}
    </NavigationContainer>
  );
}
