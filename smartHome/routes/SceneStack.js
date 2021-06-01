import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import { AddAction, AddScene, EditBuzzer, EditLight } from '../screens/Scenes';

const SceneStack = createStackNavigator();

const SceneTabStack = ({ navigation }) => {
    return (
        <SceneStack.Navigator initialRouteName="AddScene" >
            <SceneStack.Screen name="AddScene" component={AddScene} />
            <SceneStack.Screen name="AddAction" component={AddAction} />
            <SceneStack.Screen name="EditBuzzer" component={EditBuzzer} />
            <SceneStack.Screen name="EditLight" component={EditLight} />
        </SceneStack.Navigator>
    );
}

export default SceneTabStack;
