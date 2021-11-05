import React from 'react';
import {useTheme} from '@react-navigation/native';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {SIZES} from '../../constants';

export function SettingListItem({children, onPress}) {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.settingListItem, {backgroundColor: colors.gray[99]}]}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}

export default SettingListItem;

const styles = StyleSheet.create({
  settingListItem: {
    paddingHorizontal: SIZES.padding * 2,
    paddingVertical: SIZES.padding * 3,
    marginVertical: SIZES.padding * 0.5,
    borderRadius: 7,
  },
});
