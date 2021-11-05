import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SIZES} from '../../constants';
import {NavigationListItem} from './NavigationListItem';
import {ToggleListItem} from './ToggleListItem';

export function SettingList() {
  return (
    <View style={styles.settingList}>
      <NavigationListItem title="Storage management" />
      <NavigationListItem title="Device" description="iPhone, Macbook, iPad" />
      <ToggleListItem title="Camera uploads" value={true} />
      <ToggleListItem title="Use data for file transfer" value={false} />
    </View>
  );
}

export default SettingList;

const styles = StyleSheet.create({
  settingList: {
    paddingHorizontal: SIZES.padding * 3,
    marginBottom: SIZES.padding * 2,
  },
});
