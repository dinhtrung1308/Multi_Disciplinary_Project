import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { WarningHome, WarningSelect, WarningSetup } from '../screens';

// screen stack for Warning
// const screens = {
//     WarningHome: {
//         screen: WarningHome,
//         navigationOptions: {
//             title: "WarningHome",
//             // headerStyle: {
//             //     backgroundColor: "black",
//             //     fontColor: "white"
//             // }
//         }
//     },
//     WarningSelect: {
//         screen: WarningSelect,
//         navigationOptions: {
//             title: "Select Warning"
//         }
//     },
//     WarningSetup: {
//         screen: WarningSetup,
//         navigationOptions: {
//             title: "Setup Warning"
//         }
//     }
// }

// const HomeStack = createStackNavigator(screens, {
//     defaultNavigationOptions: {
//         headerTintColor: "white",
//         headerTitleStyle: {
//             alignSelf: "center",
//             justifyContent: "center"
//         },
//         headerStyle: {
//             backgroundColor: "black"
//         }
//     }
// });

const WarningStack = createStackNavigator();

const WarningTabStack = ({ navigation }) => {
    return (
        <WarningStack.Navigator initialRouteName="WarningSelect" >
            <WarningStack.Screen name="WarningHome" component={WarningHome} />
            <WarningStack.Screen name="WarningSelect" component={WarningSelect} />
            <WarningStack.Screen name="WarningSetup" component={WarningSetup} />
        </WarningStack.Navigator>
    );
}

export default WarningTabStack;