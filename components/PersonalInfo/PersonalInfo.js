import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {FONTS, SIZES} from '../../constants';

const AVATAR =
  'https://images.unsplash.com/photo-1476983109555-18ebaf412d7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80';

export function PersonalInfo() {
  const {colors} = useTheme();

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
        <Image source={{uri: AVATAR}} style={[styles.avatar]} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={[styles.name, {color: colors.primaryShade3}]}>
          Jessie Roberts
        </Text>
        <Text style={[styles.description, {color: colors.gray[45]}]}>
          1458 files · 25 folders
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
