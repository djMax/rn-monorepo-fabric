import { Platform } from 'react-native';

import { createTheme, darkColors, lightColors } from '@rneui/themed';

export const DjmaxColors = createTheme({
  lightColors: {
    ...Platform.select({
      default: lightColors.platform.android,
      ios: lightColors.platform.ios,
    }),
    background: '#F2F3F3',
    // secondary: '#FF7379',
    primary: '#FF6469',
    // black: '#E6E1E5',
  },
  darkColors: {
    ...Platform.select({
      default: darkColors.platform.android,
      ios: darkColors.platform.ios,
    }),
  },
});

export const DjmaxBrandColor = '#5224C7';
