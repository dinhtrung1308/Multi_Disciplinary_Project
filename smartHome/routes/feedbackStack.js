// Libs
import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Components
import Feedback from '../screens/Feedback';
import Form from '../screens/Form';

/**
 * createStackNavigator
 *
 * Creates a stack of our routes.
 *
*/
const Navigator = createStackNavigator({
    Feedback: { screen: Feedback },
    Form: { screen: Form},
});

/**
 * createAppContainer
 *
 * Responsible for managing app state and linking
 * the top-level navigator to the app environment.
 *
*/
const Feedbackstack = createAppContainer(Navigator);

export default Feedbackstack;