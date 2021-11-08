import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {FONTS, SIZES} from '../../constants';
import {useTotalFiles, useTotalFolders} from '../../hooks';

export function PersonalInfo({photo, name}) {
  const {colors} = useTheme();
  const totalFiles = useTotalFiles();
  const totalFolders = useTotalFolders();

  return (
    <View style={styles.profile}>
      <View
        style={[
          styles.avatarContainer,
          {
            backgroundColor: colors.background,
            shadowColor: colors.shadowColor,
          },
        ]}>
        <Image source={{uri: photo}} style={[styles.avatar]} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={[styles.name, {color: colors.primaryShade3}]}>{name}</Text>
        <Text style={[styles.description, {color: colors.gray[45]}]}>
          {totalFiles} files · {totalFolders} folders
        </Text>
      </View>
    </View>
  );
}

export default PersonalInfo;

const styles = StyleSheet.create({
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SIZES.padding,
  },
  avatarContainer: {
    borderRadius: 30,
    elevation: 8,
    overflow: 'hidden',
  },
  avatar: {
    height: 80,
    width: 80,
  },
  infoContainer: {
    paddingLeft: SIZES.padding * 3,
  },
  name: {
    ...FONTS.h4,
  },
  description: {
    ...FONTS.body1,
  },
});
