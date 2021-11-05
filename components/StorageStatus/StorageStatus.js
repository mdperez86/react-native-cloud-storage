import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Bar} from 'react-native-progress';
import {FONTS, SIZES} from '../../constants';

export function StorageStatus({total, used, dark}) {
  const {colors} = useTheme();
  const free = total - used;

  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text
          style={[
            styles.usedText,
            {color: dark ? colors.white : colors.primaryShade3},
          ]}>
          {free.toFixed(1)} GB free
        </Text>
        <Text
          style={[
            styles.totalText,
            {color: dark ? colors.primaryTint2 : colors.primaryTint1},
          ]}>
          of {total.toFixed(0)} GB
        </Text>
      </View>
      <Bar
        progress={used / (total > 0 ? total : 1)}
        width={null}
        color={colors.secondary}
        unfilledColor={dark ? colors.primaryShade2 : colors.primaryTint3}
        borderWidth={0}
        borderRadius={5}
      />
    </View>
  );
}

StorageStatus.defaultProps = {
  total: 1,
  used: 0,
};

export default StorageStatus;

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.padding,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: SIZES.padding,
  },
  usedText: {
    ...FONTS.h2,
  },
  totalText: {
    marginLeft: SIZES.padding,
    ...FONTS.h4,
    lineHeight: FONTS.h2.lineHeight - 4,
  },
});
