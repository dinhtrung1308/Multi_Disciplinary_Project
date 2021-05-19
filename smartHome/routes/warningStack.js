//npm install react-navigation
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { WarningHome, WarningSelect, WarningSetup } from '../screens'

// screen stack for Warning
const screens = {
    WarningHome: {
        screen: WarningHome,
        navigationOptions: {
            title: "WarningHome",
            // headerStyle: {
            //     backgroundColor: "black",
            //     fontColor: "white"
            // }
        }
    },
    WarningSelect: {
        screen: WarningSelect,
        navigationOptions: {
            title: "Select Warning"
        }
    },
    WarningSetup: {
        screen: WarningSetup,
        navigationOptions: {
            title: "Setup Warning"
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: "white",
        headerTitleStyle: {
            alignSelf: "center",
            justifyContent: "center"
        },
        headerStyle: {
            backgroundColor: "black"
        }
    }
});

export default createAppContainer(HomeStack);