import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer, useTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {THEME} from './constants/theme';
import {Main} from './screens';
import SignIn from './screens/SignIn';

const Stack = createStackNavigator();

function Content() {
  const {colors} = useTheme();

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.primaryTint2}
      />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </>
  );
}

function App() {
  return (
    <NavigationContainer theme={THEME}>
      <Content />
    </NavigationContainer>
  );
}

export default App;
