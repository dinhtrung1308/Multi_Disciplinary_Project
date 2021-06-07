import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import { AddAction, AddScene, EditBuzzer, EditLight, AddSceneDetail } from '../screens/Scenes';
import { COLORS, FONTS } from "../constants";
import { TouchableOpacity, Text } from "react-native";

const SceneStack = createStackNavigator();

const SceneTabStack = ({ navigation }) => {
    return (
        <SceneStack.Navigator initialRouteName="AddScene">
            <SceneStack.Screen
                name="AddScene"
                component={AddScene}
                options={{
                    headerShown: false,
                }}
            />
            <SceneStack.Screen
                name="AddSceneDetail"
                component={AddSceneDetail}
                options={{
                    headerTitle: 'Add Scene',
                    headerTitleAlign: 'center',
                    headerTintColor: 'white',
                    headerStyle: {
                    backgroundColor: COLORS.black,
                    },
                    headerRight: (props) => (
                        <TouchableOpacity style={{opacity:1}} onPress={() => {}}>
                            <Text style={{ fontSize: 16, fontWeight:'bold', color:'white'}}>SAVE</Text>
                        </TouchableOpacity>
                    ),
                    headerRightContainerStyle: {
                        paddingRight: 15
                    }
                }}
            />
            <SceneStack.Screen
                name="AddAction"
                component={AddAction}
                options={{
                    headerTitle: 'Add Action',
                    headerTitleAlign: 'center',
                    headerTintColor: 'white',
                    headerStyle: {
                    backgroundColor: COLORS.black,
                    }
                }}
            />
            <SceneStack.Screen
                name="EditBuzzer"
                component={EditBuzzer}
                options={{
                    headerTitle: 'Buzzer Modification',
                    headerTitleAlign: 'center',
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: COLORS.black,
                    },
                    headerRight: (props) => (
                        <TouchableOpacity style={{ opacity: 1 }} onPress={() => { }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>SAVE</Text>
                        </TouchableOpacity>
                    ),
                    headerRightContainerStyle: {
                        paddingRight: 15
                    }
                }}
            />
            <SceneStack.Screen
                name="EditLight"
                component={EditLight}
                options={{
                    headerTitle: 'Change Light Mode',
                    headerTitleAlign: 'center',
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: COLORS.black,
                    },
                    headerRight: (props) => (
                        <TouchableOpacity style={{ opacity: 1 }} onPress={() => { }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>SAVE</Text>
                        </TouchableOpacity>
                    ),
                    headerRightContainerStyle: {
                        paddingRight: 15
                    }
                }}
            />
        </SceneStack.Navigator>
    );
}


export default SceneTabStack;
