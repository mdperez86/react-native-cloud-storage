import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {FONTS, ICONS, IMAGES, SIZES} from '../constants';

export function SignIn({navigation}) {
  const {colors} = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={IMAGES.singin}
        imageStyle={styles.image}
        style={styles.imageBackground}>
        <Text style={[styles.heading, {color: colors.primaryShade2}]}>
          Your cloud storage safe and sound
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleSingInPress}>
          <Image
            source={ICONS.singin}
            resizeMode="contain"
            style={styles.buttonImg}
          />
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );

  function handleSingInPress() {
    navigation.navigate('Main');
  }
}

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingHorizontal: SIZES.padding * 3,
    paddingVertical: SIZES.padding * 4,
  },
  image: {},
  heading: {
    ...FONTS.h2,
    width: '80%',
    textAlign: 'right',
    paddingBottom: SIZES.padding,
  },
  button: {},
  buttonImg: {
    width: 64,
    height: 64,
  },
});
