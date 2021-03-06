import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  Header,
  PersonalInfo,
  SettingList,
  StorageStatus,
} from '../../components';
import {FONTS, SIZES} from '../../constants';
import {useAuthContext} from '../../contexts';

export function Profile() {
  const {colors} = useTheme();
  const {userInfo} = useAuthContext();

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors.background}]}>
      <ScrollView>
        <Header title="Profile">
          <PersonalInfo
            photo={userInfo?.user.photo}
            name={userInfo?.user.givenName}
          />
          <StorageStatus />
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.button, {backgroundColor: colors.secondary}]}>
            <Text style={[styles.buttonText, {color: colors.white}]}>
              Increase storage space
            </Text>
          </TouchableOpacity>
        </Header>
        <SettingList />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {flex: 1},
  button: {
    height: 48,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: SIZES.padding * 1.5,
  },
  buttonText: {
    ...FONTS.button,
  },
});
