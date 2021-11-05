import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {FONTS, IMAGES, SIZES} from '../../constants';

export function Header({title, subtitle, dark, children}) {
  const {colors} = useTheme();
  const headerBgColor = dark ? colors.primaryShade1 : colors.background;
  const titleColor = dark ? colors.white : colors.primaryShade3;

  return (
    <View style={[styles.container, {backgroundColor: headerBgColor}]}>
      <ImageBackground
        source={IMAGES.statusBar}
        style={styles.statusBar}
        imageStyle={[
          styles.statusBarImageStyle,
          {tintColor: colors.primaryTint2},
        ]}
      />
      <View style={styles.heading}>
        <View style={styles.titleContainer}>
          <Text style={[styles.titleText, {color: titleColor}]}>{title}</Text>
        </View>
        {subtitle && (
          <View style={styles.subtitleContainer}>
            <Text style={[styles.sutitleText, {color: colors.primaryTint2}]}>
              {subtitle}
            </Text>
          </View>
        )}
        {children && <View style={styles.childrenContainer}>{children}</View>}
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {},
  statusBar: {
    width: '100%',
    height: 32,
  },
  statusBarImageStyle: {
    resizeMode: 'stretch',
    height: 64,
    top: undefined,
  },
  heading: {
    paddingVertical: SIZES.padding * 2,
    paddingHorizontal: SIZES.padding * 3,
  },
  titleContainer: {},
  subtitleContainer: {},
  titleText: {
    ...FONTS.h1,
  },
  sutitleText: {
    ...FONTS.h3,
  },
  childrenContainer: {
    paddingTop: SIZES.padding * 2,
  },
});
