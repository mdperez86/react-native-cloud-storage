import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import filesize from 'filesize';

import {FONTS, ICONS, SIZES} from '../../constants';
import {categorize} from '../../api/files';

export function FileListItem({file}) {
  const {colors} = useTheme();
  const {category} = categorize(file);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={ICONS.primarySquare}
        style={styles.iconContainer}
        imageStyle={[
          styles.backgroundImage,
          {tintColor: category?.colors.secondary},
        ]}>
        <Image
          source={category?.icon}
          resizeMode="contain"
          style={[styles.icon, {tintColor: category?.colors.primary}]}
        />
      </ImageBackground>
      <View style={styles.textContainer}>
        <Text
          numberOfLines={2}
          style={[styles.textTitle, {color: colors.gray[20]}]}>
          {file.name}
        </Text>
        {(file.fileExtension || file.size) && (
          <View style={styles.textDescriptionContainer}>
            {file.fileExtension && (
              <Text style={[styles.textDescription, {color: colors.gray[45]}]}>
                {file.fileExtension}
                {' · '}
              </Text>
            )}
            <Text style={[styles.textDescription, {color: colors.gray[45]}]}>
              {file.size && filesize(file.size)}
            </Text>
          </View>
        )}
      </View>
      <TouchableOpacity style={[styles.moreContainer]}>
        <Image
          source={ICONS.more}
          resizeMode="contain"
          style={[styles.moreButton, {tintColor: colors.gray[58]}]}
        />
      </TouchableOpacity>
    </View>
  );
}

export default FileListItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 84,
    paddingLeft: SIZES.padding * 3,
    paddingRight: SIZES.padding * 2,
  },
  iconContainer: {
    height: 52,
    width: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    resizeMode: 'contain',
  },
  icon: {
    height: 24,
    width: 24,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: SIZES.padding * 2,
  },
  textTitle: {
    ...FONTS.body1,
  },
  textDescriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textDescription: {
    ...FONTS.subhead,
    textTransform: 'lowercase',
  },
  moreContainer: {
    padding: SIZES.padding,
    borderRadius: 20,
  },
  moreButton: {
    height: 24,
    width: 24,
  },
});
