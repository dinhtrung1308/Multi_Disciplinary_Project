// Libs
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS} from "../constants";
// Components
import { Feedback, FeedForm } from '../screens/Feedback';

/**
 * createStackNavigator
 *
 * Creates a stack of our routes.
 *
*/
const FeedbackStack = createStackNavigator();

const FeedbackTabStack = ({ navigation }) => {
    return (
        <FeedbackStack.Navigator initialRouteName="Feedback">
            <FeedbackStack.Screen
                name="Feedback"
                component={Feedback}
                options={{
                    headerShown: false,
                }}
            />

            <FeedbackStack.Screen
                name="FeedbackForm"
                component={FeedForm}
                options={{
                    headerTitle: 'Form',
                    headerTitleAlign: 'center',
                    headerTintColor: 'white',
                    headerStyle: {
                    backgroundColor: COLORS.black,
                    },
                }}
            />

        </FeedbackStack.Navigator>
    );
}


export default FeedbackTabStack;
