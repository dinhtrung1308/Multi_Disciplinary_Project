/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Home,Scene,Automatics,Warning,FAQs,Feedback,Login,SignUp } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

const AuthStack = createStackNavigator();

const homeDrawerStack = createDrawerNavigator();

const TabScreen = () => {
  return (
    <homeDrawerStack.Navigator>
      <homeDrawerStack.Screen name="Home" component={Home} />
      <homeDrawerStack.Screen name="Scene" component={Scene} />
      <homeDrawerStack.Screen name="Automatics" component={Automatics} />
      <homeDrawerStack.Screen name="Warning" component={Warning} />
      <homeDrawerStack.Screen name="FAQs" component={FAQs} />
      <homeDrawerStack.Screen name="Feedback" component={Feedback} />
    </homeDrawerStack.Navigator>
  );
 };


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
