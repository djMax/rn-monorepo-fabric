/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NotYetImplemented, Providers } from '@djmax/infra';

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <Providers>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={NotYetImplemented} />
      </Stack.Navigator>
    </Providers>
  );
}

export default App;
