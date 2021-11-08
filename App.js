import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {
  NavigationContainer,
  useTheme,
  useNavigation,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {THEME} from './constants/theme';
import {Main} from './screens';
import SignIn from './screens/SignIn';
import {AuthContextProvider, useAuthContext} from './contexts/AuthContext';

const Stack = createStackNavigator();

function Content() {
  const {colors} = useTheme();
  const {isSignedIn} = useAuthContext();
  const navigation = useNavigation();

  useEffect(checkSignedIn, [isSignedIn, navigation]);

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

  function checkSignedIn() {
    if (isSignedIn) {
      navigation.navigate('Main');
    }
  }
}

function App() {
  return (
    <NavigationContainer theme={THEME}>
      <AuthContextProvider>
        <Content />
      </AuthContextProvider>
    </NavigationContainer>
  );
}

export default App;
