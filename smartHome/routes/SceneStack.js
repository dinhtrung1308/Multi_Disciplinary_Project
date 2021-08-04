import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import { AddAction, AddScene, EditBuzzer, EditLight, AddSceneDetail, SceneList, DynamicSceneList } from '../screens/Scenes';
import { COLORS, FONTS } from "../constants";
import { TouchableOpacity, Text } from "react-native";

const SceneStack = createStackNavigator();

const SceneTabStack = ({ navigation, route }) => {
    return (
        <SceneStack.Navigator>
            {route.params.sceneList.length === 0 ? (
                <SceneStack.Screen
                name="AddScene"
                component={AddScene}
                initialParams={ {userToken : route.params.userToken} }
                options={{
                    headerShown: false,
                }}
            />
            ): (
                <SceneStack.Screen
                name="SceneList"
                component={SceneList}
                        initialParams={{
                            userToken: route.params.userToken,
                            sceneList: route.params.sceneList
                        }}
                options={{
                    headerShown: false,
                }}
            />        
            )}
            <SceneStack.Screen
                name="DynamicSceneList"
                component={DynamicSceneList}
                        initialParams={{
                            userToken: route.params.userToken,
                        }}
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
                }}
                initialParams={ {userToken : route.params.userToken} }
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
                }}
            />
        </SceneStack.Navigator>
    );
}


export default SceneTabStack;
