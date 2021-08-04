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
import FAQs from '../screens/FAQ/FAQs';
import Chatbot from '../screens/FAQ/Chatbot';
import { COLORS } from '../constants';


const FaqStack = createStackNavigator();

const FaqTabStack = ({ navigation }) => {
    return (
        <FaqStack.Navigator initialRouteName="Chatbot">
            <FaqStack.Screen
                name="Faq"
                component={FAQs}
                options={{
                    headerShown: false,
                }}
            />

            <FaqStack.Screen
                name="Chatbot"
                options={{
                    headerShown: false,
                }}
                component={Chatbot}
            />

        </FaqStack.Navigator>
    );
}


export default FaqTabStack;