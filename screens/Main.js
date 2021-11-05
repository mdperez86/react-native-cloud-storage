import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '@react-navigation/native';
import {CloudStorage, LocalStorage, Notifications, Profile} from './main';
import {ICONS} from '../constants';
import {BottomTabBarButton, BottomTabBarIcon} from '../components';

const BottomTabs = createBottomTabNavigator();

export function Main() {
  const {colors} = useTheme();

  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.shadowColor,
          shadowOffset: {width: 0, height: 4},
          shadowRadius: 14,
          shadowOpacity: 0.3,
          elevation: 14,
        },
        tabBarButton,
      }}
      initialRouteName="CloudStorage">
      <BottomTabs.Screen
        name="CloudStorage"
        component={CloudStorage}
        options={{
          tabBarIcon: getTabBarIcon(ICONS.cloud),
        }}
      />
      <BottomTabs.Screen
        name="LocalStorage"
        component={LocalStorage}
        options={{
          tabBarIcon: getTabBarIcon(ICONS.local),
        }}
      />
      <BottomTabs.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: getTabBarIcon(ICONS.bell),
        }}
      />
      <BottomTabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: getTabBarIcon(ICONS.user),
        }}
      />
    </BottomTabs.Navigator>
  );

  function getTabBarIcon(source) {
    return function tabBarIcon({focused}) {
      return <BottomTabBarIcon source={source} focused={focused} />;
    };
  }

  function tabBarButton(props) {
    return <BottomTabBarButton {...props} />;
  }
}

export default Main;
