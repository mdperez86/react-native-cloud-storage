import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

export function BottomTabBarIcon({focused, source}) {
  const {colors} = useTheme();
  const tintColor = focused ? colors.primary : colors.gray[73];

  return (
    <Image
      source={source}
      resizeMode="contain"
      style={[styles.icon, {tintColor}]}
    />
  );
}

export default BottomTabBarIcon;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
