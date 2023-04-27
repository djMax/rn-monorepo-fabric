import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { ParamListBase } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import { Text } from '@rneui/themed';

const style = StyleSheet.create({
  centerSpread: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    alignContent: 'center',
  },
});

export function NotYetImplemented<T extends ParamListBase, R extends keyof T>({
  route,
}: StackScreenProps<T, R>) {
  return (
    <View style={style.centerSpread}>
      <Text h2>Not yet implemented</Text>
      <Text h3>Route: {route.name}</Text>
    </View>
  );
}
