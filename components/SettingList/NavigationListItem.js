import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import SettingListItem from './SettingListItem';
import {FONTS, ICONS} from '../../constants';

export function NavigationListItem({title, description}) {
  const {colors} = useTheme();

  return (
    <SettingListItem>
      <View style={styles.navigationListItem}>
        <View style={styles.navigationListItemTexts}>
          <Text
            style={[styles.navigationListItemTitle, {color: colors.gray[20]}]}>
            {title}
          </Text>
          {description && (
            <Text
              style={[
                styles.navigationListItemTitle,
                {color: colors.gray[45]},
              ]}>
              {description}
            </Text>
          )}
        </View>
        <Image
          source={ICONS.caretRight}
          resizeMode="contain"
          style={[styles.navigationListItemIcon, {tintColor: colors.gray[58]}]}
        />
      </View>
    </SettingListItem>
  );
}

export default NavigationListItem;

const styles = StyleSheet.create({
  navigationListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navigationListItemTexts: {},
  navigationListItemTitle: {
    ...FONTS.body1,
  },
  navigationListItemDesc: {
    ...FONTS.subhead,
  },
  navigationListItemIcon: {
    height: 30,
    width: 30,
  },
});
