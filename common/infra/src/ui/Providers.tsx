import * as React from 'react';

import { IdentityStore } from '@djmax/state';
import { ThemeProvider } from '@rneui/themed';

import { NavigationContainerWithAnalytics } from '../nav';
import { ColorScheme } from './ColorScheme';
import { DjmaxColors } from './DjmaxColors';

export function Providers({ children }: React.PropsWithChildren<object>) {
  const identityStore = IdentityStore;

  console.log('FTUX Completed', identityStore.completedFtUx.get());

  return (
    <ThemeProvider theme={DjmaxColors}>
      <ColorScheme>
        <NavigationContainerWithAnalytics>
          {children}
        </NavigationContainerWithAnalytics>
      </ColorScheme>
    </ThemeProvider>
  );
}
