import {useTheme} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Header} from '../../components';
import {FONTS, IMAGES, SIZES} from '../../constants';

export function Notifications() {
  const {colors} = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors.background}]}>
      <FlatList
        data={[]}
        ListHeaderComponent={useCallback(ListHeaderComponent, [])}
        ListEmptyComponent={useCallback(ListEmptyComponent, [])}
        style={styles.container}
      />
    </SafeAreaView>
  );

  function ListHeaderComponent() {
    return <Header title="Notifications" />;
  }
}

export default Notifications;

function ListEmptyComponent() {
  const {colors} = useTheme();

  return (
    <View style={styles.emptyContainer}>
      <Image
        source={IMAGES.emptyNotification}
        resizeMode="contain"
        style={styles.emptyContainerImg}
      />
      <Text
        style={[
          styles.emptyNotificationHeading,
          {color: colors.primaryShade3},
        ]}>
        No notifcations yet
      </Text>
      <Text
        style={[styles.emptyNotificationDescription, {color: colors.gray[45]}]}>
        Here you will see the external changes in your shared folders, tags from
        your peers and other updates
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SIZES.padding * 4,
  },
  emptyContainerImg: {
    height: 240,
    marginVertical: SIZES.padding * 4,
  },
  emptyNotificationHeading: {
    marginVertical: SIZES.padding * 2,
    textAlign: 'center',
    ...FONTS.h3,
  },
  emptyNotificationDescription: {
    textAlign: 'center',
    ...FONTS.body2,
  },
});
