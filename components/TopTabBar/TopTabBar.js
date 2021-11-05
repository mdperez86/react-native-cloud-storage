import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {MaterialTabBar} from 'react-native-collapsible-tab-view';
import {FONTS, SIZES} from '../../constants';

export function TopTabBar(props) {
  const {colors} = useTheme();

  return (
    <MaterialTabBar
      {...props}
      indicatorStyle={{
        ...styles.indicatorStyle,
        backgroundColor: colors.primary,
        width: Dimensions.get('window').width / 2 - SIZES.padding * 10,
      }}
      activeColor={colors.primaryShade3}
      inactiveColor={colors.gray[58]}
      labelStyle={styles.labelStyle}
      tabStyle={styles.tabStyle}
    />
  );
}

export default TopTabBar;

const styles = StyleSheet.create({
  indicatorStyle: {
    height: 4,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginLeft: SIZES.padding * 5,
  },
  labelStyle: {
    ...FONTS.tab,
    margin: 0,
  },
  tabStyle: {
    height: 50,
  },
});
