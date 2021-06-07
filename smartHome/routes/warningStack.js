import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { WarningHome, WarningSelect, WarningSetup } from '../screens';
import { COLORS} from "../constants";
const WarningStack = createStackNavigator();

const WarningTabStack = ({ navigation }) => {
    return (
        <WarningStack.Navigator initialRouteName="WarningHome">
            <WarningStack.Screen
                name="WarningHome"
                component={WarningHome}
                options={{
                    headerShown: false,
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