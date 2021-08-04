import { Icon } from 'native-base';
import React from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
import { Alert } from 'react-native';
import { StyleSheet } from 'react-native';
import {
    View,
    Text,
    TextInput
} from "react-native";
import { Block } from "../../components"
import { FONTS } from '../../constants';
import { StackActions } from '@react-navigation/native';

function AddSceneDetail({ navigation, route }) {
    
    const [sceneName, setSceneName] = React.useState('');
    const [actionList, setActionList] = React.useState([]);

    function AddActionList(_actionList) {
        if (sceneName === '') {
            Alert.alert("ScenName must not be empty");
            return false;
        }
        // Add a scene
        fetch('http://127.0.0.1:3000/api/scene/' + route.params.userToken, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: sceneName,
            })
        })
            .then(res => res.json())
            .then(result => {
                let sceneId = result.sceneId;
                // Add action list
                return fetch('http://127.0.0.1:3000/api/action/' + sceneId, {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        actionList: actionList
                    })
                })
            })
            .then(res => res.json())
            .then(res => {
               console.log(res);
            })
            .catch(function (error) {
                console.error('Error:', error);
            })
        return true;
    }

    function deleteScene(item_key) {
        Alert.alert("Delete", "Are you sure to delete this action", [
            {
                text: "Cancel",
                style: 'cancel'
            },
            {
                text: "OK",
                onPress: () => {
                    setActionList((prevState) => {
                        prevState.splice(item_key, 1);
                        return [...prevState];
                    })
                }
            }   
        ])
    }

    function modifyActionList(_action) {
        const { actionName, action_value } = _action;
        if (actionName) {
            let newActionList = [...actionList];
            newActionList.push({ actionName: actionName, action_value: action_value, key: newActionList.length});
            setActionList(newActionList);
        }
    }

    React.useMemo(() => {modifyActionList(route.params)},[route.params]);

    return (
        <View style={ {flex: 1} }>
            <Block row style={{ minheight:'40%', margin:15 }}>
                    
                <Block middle flex={2} row style={{ padding: 5 }}>
                    
                    <TouchableOpacity style={{borderRadius:25, backgroundColor:'white'}}>
                        <Icon name='sunny' style={{ fontSize: 50, color: 'gold'}} />
                    </TouchableOpacity>
                    
                </Block>
                
                <Block left flex={9} column style={{}}>
                    
                    <Block row left flex={2.5} style={{margin:5}}>
                        <Text style={{flex:1, fontSize:12}}>SCENE NAME</Text>
                    </Block>

                    <Block row left flex={7.5} style={{margintop:5, borderRadius:10, backgroundColor: "white",}}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder={'Your scene name'}
                                placeholderTextColor={'gray'}
                                underlineColorAndroid='transparent'
                                onChangeText={ (name) => setSceneName(name)}
                            />
                        </View>
                    </Block>
                        
                    </Block>
            </Block>
            
            <Block column style={{ margin: 20, flex: 1 }}>
                
                <Text style={FONTS.h2}>Actions</Text>
                {actionList.length === 0 ?
                    (
                    <TouchableOpacity style={styles.button} onPress={ () => navigation.push('AddAction')}>
                        <Text style={{flex:0.8, paddingRight:5}}>Add what you want to happen when this scene runs</Text>
                        <Icon name='add-circle-sharp' style={{flex: 0.1, color:'black',fontSize: 35}}></Icon>
                    </TouchableOpacity>
                    ) :
                    (
                        <FlatList
                            extraData={actionList}
                            data={actionList}
                            keyExtractor={item => item.key}
                            renderItem={({ item}) => {
                                return <View style={styles.item}>
                                    <TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                                        <Text style={styles.text}>{item.actionName}</Text>
                                        
                                        <TouchableOpacity onPress={() => deleteScene(item.key)}>
                                            <Icon name="remove-circle-sharp"></Icon>
                                        </TouchableOpacity>
                                        
                                    </TouchableOpacity>
                                </View>
                            }}
                            ListFooterComponent={
                                <View style={styles.moreButton}>
                                    <TouchableOpacity
                                        onPress={ () => navigation.navigate("AddAction")}
                                        style={{flexDirection: 'row', justifyContent: 'center', padding: 10 }}>
                                        <Icon name='add-circle-sharp' style={{color: 'black', borderRadius:30, fontSize: 35}}></Icon>
                                    </TouchableOpacity>
                                </View>    
                            }
                        />
                        
                    )
                }
                
                <View style={{justifyContent: 'space-around', marginBottom: 15, flexDirection: 'row'}}>
                    <TouchableOpacity style={{opacity:1}} onPress={() => {}}>
                        <Text
                            style={{ fontSize: 25, fontWeight: 'bold', color: 'dodgerblue' }}
                            onPress={() => {
                                let s = AddActionList(actionList);
                                if (s) navigation.navigate("DynamicSceneList", {userToken: route.params.userToken});
                            }}
                        >Save</Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity
                        style={{ opacity: 1 }} onPress={() => {
                            navigation.goBack();
                        }}>
                        <Text style={{ fontSize: 25, fontWeight:'bold', color:'dodgerblue'}}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </Block>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        fontSize: 17,
        color: 'black',
      },
    inputContainer: {
        flex: 1,
    },
    button: {
        marginTop: 10,
        padding: 12,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 20,
    },
    item: {
        flexDirection: 'row',
        backgroundColor: 'white',
        margin: 10,
        padding: 5,
        borderRadius: 15,
    },
    moreButton: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 10,
        padding: 5,
        borderRadius: 15,
    },
    text: {
        marginLeft: 15,
        fontSize: 17,
        fontWeight: '600',
        color: 'black'
    },
})

export default AddSceneDetail;