import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const AuthContext = createContext({
  isSignedIn: false,
  userInfo: null,
  accessToken: null,
  onSignIn: () => Promise.resolve(null),
  refreshTokens: () => {},
});

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthContextProvider({children}) {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(configureGoogleSignin, []);
  useEffect(checkSignedIn, []);
  useEffect(getCurrentUser, [isSignedIn]);
  useEffect(refreshTokens, [isSignedIn]);

  return (
    <AuthContext.Provider
      value={{
        isSignedIn,
        userInfo,
        accessToken,
        onSignIn: useCallback(handleSignIn, []),
        refreshTokens: useCallback(refreshTokens, [isSignedIn]),
      }}>
      {children}
    </AuthContext.Provider>
  );

  function checkSignedIn() {
    GoogleSignin.signInSilently().then(handleResponse).catch(handleError);

    function handleResponse(data) {
      console.log('signInSilently', data);
      setIsSignedIn(true);
    }
  }

  function handleSignIn() {
    signIn().then(handleUserResponse).catch(handleError);
  }

  function getCurrentUser() {
    if (isSignedIn) {
      GoogleSignin.getCurrentUser().then(handleUserResponse).catch(handleError);
    }
  }

  function refreshTokens() {
    if (isSignedIn) {
      const intervalId = setInterval(refresh, 30 * 1000);

      function refresh() {
        GoogleSignin.getTokens().then(handleAccessToken).catch(handleError);
      }

      return function clear() {
        return clearInterval(intervalId);
      };
    }
  }

  function handleUserResponse(data) {
    console.log('handleSignIn', data);
    setUserInfo(data);
  }

  function handleAccessToken(tokens) {
    console.log('refreshTokens', tokens);
    setAccessToken(tokens.accessToken);
  }

  function handleError(error) {
    console.error(error);
    setIsSignedIn(false);
    setUserInfo(null);
    setAccessToken(null);
  }
}

function configureGoogleSignin() {
  GoogleSignin.configure({
    scopes: [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/drive',
    ],
  });
}

async function signIn() {
  return GoogleSignin.hasPlayServices().then(handleResponse).catch(handleError);

  function handleResponse() {
    return GoogleSignin.signIn();
  }

  function handleError(error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
    console.error(error);
    return Promise.reject(error);
  }
}
