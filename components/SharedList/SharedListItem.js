import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {ICONS} from '../../constants';

export function SharedListItem({share}) {
  const {colors} = useTheme();
  const {photoLink} = share;

  return (
    <View style={[styles.container, {borderColor: colors.gray[99]}]}>
      <Image
        source={photoLink ? {uri: photoLink} : ICONS.primarySquare}
        resizeMode="cover"
        style={[styles.avatar]}
      />
    </View>
  );
}

export default SharedListItem;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 13,
    marginLeft: -14,
    height: 32,
    width: 32,
    overflow: 'hidden',
  },
  avatar: {
    height: 28,
    width: 28,
  },
});
