import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {FONTS, ICONS, SIZES} from '../../constants';

export function SearchBox({onChangeText}) {
  const {colors} = useTheme();

  return (
    <View style={[styles.container, {backgroundColor: colors.gray[98]}]}>
      <Image
        source={ICONS.search}
        resizeMode="contain"
        style={[
          styles.icon,
          {
            tintColor: colors.gray[73],
          },
        ]}
      />
      <TextInput
        onChangeText={onChangeText}
        placeholder="Search"
        placeholderTextColor={colors.gray[73]}
        style={[styles.input, {color: colors.gray[73]}]}
      />
    </View>
  );
}

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
  },
  icon: {
    height: 24,
    width: 24,
    marginHorizontal: SIZES.padding * 2,
  },
  input: {
    flex: 1,
    paddingVertical: SIZES.padding,
    paddingLeft: 0,
    paddingRight: SIZES.padding * 3,
    ...FONTS.body1,
  },
});
