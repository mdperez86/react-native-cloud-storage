import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {FONTS, ICONS, SIZES} from '../../constants';

export function CategoryListItem({category, onCategoryPress}) {
  const {colors} = useTheme();

  return (
    <TouchableOpacity style={styles.container} onPress={handleCategoryPress}>
      <ImageBackground
        style={styles.iconContainer}
        source={ICONS.primarySquare}
        imageStyle={[
          styles.backgroundImage,
          {tintColor: category.colors.secondary},
        ]}>
        <Image
          source={category.icon}
          resizeMode="contain"
          style={[styles.icon, {tintColor: category.colors.primary}]}
        />
      </ImageBackground>
      <Text style={[styles.textTitle, {color: colors.gray[45]}]}>
        {category.name}
      </Text>
    </TouchableOpacity>
  );

  function handleCategoryPress() {
    onCategoryPress && onCategoryPress(category);
  }
}

export default CategoryListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SIZES.padding * 1.5,
  },
  iconContainer: {
    height: 72,
    width: 72,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    resizeMode: 'contain',
  },
  icon: {
    height: 32,
    width: 32,
  },
  textTitle: {
    marginTop: SIZES.padding,
    ...FONTS.body2,
  },
});
