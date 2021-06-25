import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { WarningHome, WarningList, WarningLoading, WarningSelect, WarningSetup } from '../screens/Warning';
import { COLORS } from "../constants";
const WarningStack = createStackNavigator();

const WarningTabStack = ({ navigation, route }) => {
    return (
        <WarningStack.Navigator initialRouteName="WarningHome">
            <WarningStack.Screen
                name="WarningHome"
                component={WarningHome}
                initialParams={{ userToken: route.params.userToken }}
                options={{
                    headerShown: false,
                }}
            />

            <WarningStack.Screen
                name="WarningLoading"
                component={WarningLoading}
            />

            <WarningStack.Screen
                name="WarningList"
                component={WarningList}
                options={{
                    headerTitle: 'Select Warning',
                    headerTitleAlign: 'center',
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: COLORS.black,
                    },
                }}
            />

            <WarningStack.Screen
                name="WarningSelect"
                component={WarningSelect}
                options={{
                    headerTitle: 'Select Warning',
                    headerTitleAlign: 'center',
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: COLORS.black,
                    },
                }}
            />

            <WarningStack.Screen
                name="WarningSetup"
                component={WarningSetup}
                options={{
                    headerTitle: 'Warning Setup',
                    headerTitleAlign: 'center',
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: COLORS.black,
                    },
                }}
            />

        </WarningStack.Navigator>
    );
}


export default WarningTabStack;