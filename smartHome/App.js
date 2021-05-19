/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Login,SignUp } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabScreen from './routes/HomeStack';

const AuthStack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen name="Home"
          component={TabScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen name="SignUp" component={SignUp} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
