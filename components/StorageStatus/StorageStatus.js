import {useTheme} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Bar} from 'react-native-progress';
import {GDrive} from '@robinbobin/react-native-google-drive-api-wrapper';
import {FONTS, SIZES} from '../../constants';
import {useAuthContext} from '../../contexts';
import filesize from 'filesize';

const gdrive = new GDrive();

export function StorageStatus({dark}) {
  const {accessToken, refreshTokens} = useAuthContext();
  const {colors} = useTheme();
  const [storageQuota, setStorageQuota] = useState({limit: '1', usage: '0'});

  useEffect(loadStatus, [accessToken, refreshTokens]);

  const limit = Number.parseFloat(storageQuota.limit, 10);
  const usage = Number.parseFloat(storageQuota.usage, 10);
  const free = limit - usage;

  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text
          style={[
            styles.usedText,
            {color: dark ? colors.white : colors.primaryShade3},
          ]}>
          {filesize(free, {round: 0})} free
        </Text>
        <Text
          style={[
            styles.totalText,
            {color: dark ? colors.primaryTint2 : colors.primaryTint1},
          ]}>
          of {filesize(limit, {round: 0})}
        </Text>
      </View>
      <Bar
        progress={usage / limit}
        width={null}
        color={colors.secondary}
        unfilledColor={dark ? colors.primaryShade2 : colors.primaryTint3}
        borderWidth={0}
        borderRadius={5}
      />
    </View>
  );

  function loadStatus() {
    gdrive.accessToken = accessToken;
    gdrive.about
      .get('storageQuota')
      .then(handleAboutResponse)
      .catch(handleAboutError);

    function handleAboutResponse(response) {
      console.log(response);
      setStorageQuota(response.storageQuota);
    }

    function handleAboutError(error) {
      console.error('handleAboutError', error);
      if (error.message === 'Invalid Credentials') {
        refreshTokens();
      }
    }
  }
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
