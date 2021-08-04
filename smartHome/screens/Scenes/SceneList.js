import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView
} from "react-native";
import { Header, Left, Right, Icon, Body } from 'native-base';
import { COLORS, FONTS} from '../../constants';
import { StyleSheet,FlatList, ActivityIndicator} from 'react-native';

function SceneList({ navigation, route }) {
    const [runScene, setRunScene] = React.useState(false);
    const sceneList = route.params.sceneList;

    const runSceneHandler = (sceneId) => {
        const runSceneHandler = (sceneId) => {
            // Fetch action List
            fetch('http://127.0.0.1:3000/api/action/' + sceneId, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json'
                },
              }).then(res => res.json())
                .then(res => {
                res["actionList"].forEach(function (action) {
                    if (action.device === "LED") {
                        let value = 0
                        if (action.command === "RED") {
                            value = 1;
                        }
                        else {
                            value = 2;
                        }
                        fetch("https://io.adafruit.com/api/v2/CSE_BBC/feeds/bk-iot-led/data", {
              
                            method: "POST",
                        
                            body: JSON.stringify({ value: '{\"id\":\"1\",\"name\":\"LED\",\"data\":\"' + value + '\",\"unit\":\"\"}' }),
        
                            headers: {
                                'Content-Type': 'application/json',
                                'X-AIO-Key': 'aio_xfrn03lbvcuWzB3QUlWMPb6jelZR',
                            }
                        })
        
                            .then(response => response.json())
                    
                            .then(
        
                                console.log("Run LED successfully")
        
                            )
                        
                            .catch((error) => {
                                console.error(error);
                            })
                            }
                            
                    else {
        
                        fetch("https://io.adafruit.com/api/v2/CSE_BBC/feeds/bk-iot-speaker/data", {
              
                            method: "POST",
                        
                            body: JSON.stringify({ value: '{\"id\":\"2\",\"name\":\"SPEAKER\",\"data\":\"' + action.value + '\",\"unit\":\"\"}' }),
        
                            headers: {
                                'Content-Type': 'application/json',
                                'X-AIO-Key': 'aio_xfrn03lbvcuWzB3QUlWMPb6jelZR',
                            }
                        })
        
                            .then(response => response.json())
                    
                            .then(
        
                                console.log("Run Buzzer successfully")
        
                            )
                        
                            .catch((error) => {
                                console.error(error);
                            })
                        
                    }
                        });
              })
              .catch(function (error) {
                console.error('Error:', error);
              })
                .finally(function () {
                    Alert.alert("Success","Running scene successfully");
                })
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            
            <Header style={{ backgroundColor: COLORS.black }}>
                <Left style={{ flex: 1 }}>
                    <Icon name="menu" style={{ color: 'white', fontSize: FONTS.h3.fontSize }} onPress={() => navigation.openDrawer()} />
                </Left>
                <Body style={{ flex: 1 }} >
                    <Text style={{ color: 'white', fontFamily: FONTS.h3.fontFamily, fontSize: FONTS.h3.fontSize }}>Scenes</Text>
                </Body>
                <Right style={{ flex: 1 }} />
            </Header>
            <View style={styles.container}>

                <FlatList
                    data={sceneList}
                    keyExtractor={item => item.id}
                    renderItem={({ item, index }) => {
                        return <View style={styles.item}>
                            <TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                                <Text style={styles.text}>{item.name}</Text>
                                {runScene ?
                                    <ActivityIndicator size="large" color="#b06f13" />
                                    :
                                    <TouchableOpacity onPress={() => runSceneHandler(item)}>
                                        <Icon name="play" color="md-play-skip-forward-circle-outline"></Icon>
                                    </TouchableOpacity>
                                }
                            </TouchableOpacity>
                        </View>
                    }}
                    ListFooterComponent={
                        <View style={styles.button}>
                            <TouchableOpacity
                                onPress={ () => navigation.navigate("AddSceneDetail")}
                                style={{flexDirection: 'row', justifyContent: 'center', padding: 10 }}>
                                <Icon name='add-circle-sharp' style={{color: 'black', borderRadius:30, fontSize: 35}}></Icon>
                            </TouchableOpacity>
                        </View>    
                    }
                />
                
                

            </View>
        
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        flexDirection: 'column',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: .3,
        shadowRadius: 20,
    },
    item: {
        flexDirection: 'row',
        backgroundColor: 'white',
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
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 10,
        padding: 5,
        borderRadius: 15,
    },
})


export default SceneList;