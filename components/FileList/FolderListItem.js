import React from 'react';
import {
  Dimensions,
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
import {SharedList} from '..';

export function FolderListItem({folder}) {
  const {colors} = useTheme();
  const width = Dimensions.get('window').width;
  const columnWidth = width / 2 - SIZES.padding * 3;

  return (
    <TouchableOpacity style={[styles.container, {height: columnWidth}]}>
      <ImageBackground
        source={ICONS.secondarySquare}
        style={styles.background}
        imageStyle={[
          styles.backgroundImage,
          {tintColor: colors.gray[99], height: columnWidth, width: columnWidth},
        ]}>
        <View style={styles.top}>
          <View style={styles.heading}>
            <Text
              numberOfLines={2}
              style={[styles.name, {color: colors.gray[20]}]}>
              {folder.name}
            </Text>
            <Text style={[styles.details, {color: colors.gray[45]}]}>
              {folder.files}f · {folder.size && filesize(folder.size)}
            </Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Image
              source={ICONS.more}
              resizeMode="contain"
              style={[styles.buttonIcon, {tintColor: colors.gray[58]}]}
            />
          </TouchableOpacity>
        </View>
        <SharedList shares={folder.permissions} />
      </ImageBackground>
    </TouchableOpacity>
  );
}

export default FolderListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: SIZES.padding,
  },
  background: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-between',
    padding: SIZES.padding * 2,
  },
  backgroundImage: {
    resizeMode: 'contain',
  },
  top: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  heading: {
    flex: 0.85,
  },
  name: {
    ...FONTS.body1,
  },
  details: {
    ...FONTS.subhead,
    textTransform: 'lowercase',
  },
  button: {
    position: 'absolute',
    right: -SIZES.padding,
    height: 32,
    width: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    height: 24,
    width: 24,
  },
});
