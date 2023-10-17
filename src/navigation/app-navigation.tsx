import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RouteName } from './route-name';

import { LoginScreen, SignupScreen } from '@/screens';

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={RouteName.Login} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={RouteName.Login} component={LoginScreen} />
        <Stack.Screen name={RouteName.SignUp} component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
