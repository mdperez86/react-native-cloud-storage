import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {SIZES} from '../../constants';

export function SearchBar({children}) {
  const {colors} = useTheme();

  return (
    <View style={[styles.container, {backgroundColor: colors.primaryShade1}]}>
      <View style={[styles.bar, {backgroundColor: colors.background}]}>
        {children}
      </View>
    </View>
  );
}

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    paddingTop: SIZES.padding,
  },
  bar: {
    padding: SIZES.padding * 3,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
});
