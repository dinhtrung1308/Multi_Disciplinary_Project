/**
 * App.js
 *
 * Root component of the app, 
 * responsible for setting up routes.
 *
*/

// Libs
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Components
import FAQs from '../screens/FAQs';
import Chatbot from '../screens/Chatbot';
import { COLORS } from '../constants';


const FaqStack = createStackNavigator();

const FaqTabStack = ({ navigation }) => {
    return (
        <FaqStack.Navigator initialRouteName="Faq">
            <FaqStack.Screen
                name="Faq"
                component={FAQs}
                options={{
                    headerShown: false,
                }}
            />

            <FaqStack.Screen
                name="Chatbot"
                component={Chatbot}
                options={{
                    headerTitle: 'Chat',
                    headerTitleAlign: 'center',
                    headerTintColor: 'white',
                    headerStyle: {
                    backgroundColor: COLORS.black,
                    },
                }}
            />

        </FaqStack.Navigator>
    );
}


export default FaqTabStack;