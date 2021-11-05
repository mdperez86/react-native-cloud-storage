import React from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {SettingListItem} from './SettingListItem';
import {FONTS} from '../../constants';

export function ToggleListItem({title, description, value, onValueChange}) {
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
        <Switch
          value={value}
          onValueChange={onValueChange}
          trackColor={{false: colors.gray[73], true: colors.primary}}
          thumbColor={colors.white}
        />
      </View>
    </SettingListItem>
  );
}

export default ToggleListItem;

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
});
