import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {ICONS} from '../../constants';

export function BottomTabBarButton({
  accessibilityLabel,
  accessibilityState,
  children,
  onPress,
}) {
  const {colors} = useTheme();
  const isSelected = accessibilityState?.selected ?? false;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{backgroundColor: colors.background}}
        accessibilityLabel={accessibilityLabel}
        activeOpacity={1}
        onPress={onPress}>
        <ImageBackground
          style={[
            styles.button,
            isSelected && {
              ...styles.shadow,
              backgroundColor: colors.primaryTint4,
              shadowColor: colors.shadowColor,
            },
          ]}
          source={isSelected ? ICONS.primarySquare : null}
          imageStyle={[
            styles.backgroundImage,
            {tintColor: colors.primaryTint4},
          ]}>
          {children}
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

export default BottomTabBarButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 32,
    height: 32,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
  backgroundImage: {
    zIndex: 0,
  },
  shadow: {
    shadowOffset: {width: 0, height: 12},
    shadowRadius: 20,
    shadowOpacity: 0.3,
    elevation: 12,
  },
});
