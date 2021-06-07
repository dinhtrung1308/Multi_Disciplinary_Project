import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SignUp,Login } from '../screens';

const AuthStack = createStackNavigator();

const AuthStackTab = ({ navigation }) => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Login"
            component={Login}
            options={{ headerShown: false }}
            />
            <AuthStack.Screen name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
            />
        </AuthStack.Navigator>
    );
}

export default AuthStackTab;