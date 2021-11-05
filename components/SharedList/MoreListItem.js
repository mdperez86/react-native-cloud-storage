import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {FONTS, ICONS} from '../../constants';

export function MoreListItem({count}) {
  const {colors} = useTheme();

  return (
    <View style={[styles.container, {borderColor: colors.gray[99]}]}>
      <ImageBackground
        source={ICONS.primarySquare}
        style={styles.avatar}
        resizeMode="contain"
        imageStyle={[styles.avatar, {tintColor: colors.gray[45]}]}>
        <Text style={[styles.more, {color: colors.white}]}>+{count}</Text>
      </ImageBackground>
    </View>
  );
}

export default MoreListItem;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 13,
    marginLeft: -14,
    height: 32,
    width: 32,
  },
  avatar: {
    height: 28,
    width: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  more: {
    ...FONTS.subhead,
  },
});
