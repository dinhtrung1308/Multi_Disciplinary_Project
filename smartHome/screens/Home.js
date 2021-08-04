import React, { useEffect,useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Alert,
    Image
} from "react-native";
// https://reactnavigation.org/docs/getting-started
// npm install native-base --save
import { Header, Left, Right, Icon, Body, Switch } from 'native-base';
import { FONTS,COLORS } from '../constants';
import { Block } from '../components'
// npm install react-native-paper
import { ActivityIndicator } from 'react-native-paper';
// import { AIO_KEY } from '@env';
import LinearGradient from 'react-native-linear-gradient';
// import LinearGradient
function Home({ route, navigation }) {


    const [isGettingTemp, setGettingTemp] = React.useState(true);
    const [temperature, setTemperature] = React.useState(31)
    const [humid, setHumid] = React.useState(40)

    const [isLightOn, setLightSwitch] = React.useState(false);
    const [isBuzzerOn, setBuzzerSwitch] = React.useState(false);
    
    const userName = route.params.userName;
    
    const reload = useEffect (() => {
            return fetch("https://io.adafruit.com/api/v2/CSE_BBC/feeds/bk-iot-temp-humid/data?limit=1", {
            method: 'GET',
            headers: {
                'X-AIO-Key': 'aio_xfrn03lbvcuWzB3QUlWMPb6jelZR',
            }
        })
            .then((response) => response.json())
            .then((json) => {
                var startIdx = json[0]["value"].search("data") + 6;
                var endIdx = json[0]["value"].indexOf("\"",startIdx+1);
                var data = json[0]["value"].slice(startIdx + 1, endIdx);
                var fields = data.split('-');
                setTemperature(fields[0]);
                setHumid(fields[1]);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => setGettingTemp(false))
            ; 
     },[isGettingTemp])

    const LightChangeHandler = (value) => {
        setLightSwitch(value);
        var on = 0;
        var onStr = "OFF";
        if (value) {
            on = 1;
            onStr = "ON";
        }
        fetch("https://io.adafruit.com/api/v2/CSE_BBC/feeds/bk-iot-led/data", {
      
            method: "POST",
        
            body: JSON.stringify({ value: '{\"id\":\"1\",\"name\":\"LED\",\"data\":\"' + on +'\",\"unit\":\"\"}' }),

            headers: {
                'Content-Type': 'application/json',
                'X-AIO-Key': 'aio_xfrn03lbvcuWzB3QUlWMPb6jelZR',
            }
        })

            .then(response => response.json())
    
            .then(() => Alert.alert(
                'Notification',
                'Your LED has been turned ',
            ))
        
            .catch((error) => {
                console.error(error);
            })
    }

    const BuzzerChangeHandler = (value) => {
        setBuzzerSwitch(value);
        var on = 50;
        var onStr = "OFF";
        if (value) {
            on = 100;
            onStr = "ON";
        }
        fetch("https://io.adafruit.com/api/v2/CSE_BBC/feeds/bk-iot-speaker/data", {
      
            method: "POST",
        
            body: JSON.stringify({ value: '{\"id\":\"2\",\"name\":\"SPEAKER\",\"data\":\"' + on +'\",\"unit\":\"\"}' }),

            headers: {
                'Content-Type': 'application/json',
                'X-AIO-Key': 'aio_xfrn03lbvcuWzB3QUlWMPb6jelZR',
            }
        })

            .then(response => response.json())
    
            .then(() => Alert.alert(
                'Notification',
                'Your Buzzer has beeped'
            ))
        
            .catch((error) => {
                console.error(error);
            })
    }

    return (
        <View style={ {flex: 1} }>
            <Header style={ {backgroundColor:COLORS.black} }>
                <Left style={ {flex:1} }>
                    <Icon name="menu" style={{color: 'white', fontSize:FONTS.h3.fontSize}} onPress={ () => navigation.openDrawer() } />
                </Left>
                <Body style={ {flex:1} } >
                    <Text style={ {color:'white', fontFamily : FONTS.h3.fontFamily, fontSize:FONTS.h3.fontSize} }> Home </Text>
                </Body>
                <Right style={ {flex:1} } />
            </Header>
            {/* Add linear background color*/}
            <LinearGradient colors={['#FFFFFF', '#efefbb', '#fbc9a0']} style={styles.body}>
            <Block style={styles.dashboard}>
                <Block column style={{ marginVertical: 14 * 2, }}>
                    <Text style={ {...FONTS.welcome} }>Welcome!</Text>
                    <Text style={ {...FONTS.name} }>{userName}</Text>
                </Block>

                <Block row style={{ paddingVertical: 30 }}>
                    <Block flex={1.5} row style={{}}>
                        {isGettingTemp ? <ActivityIndicator size="large" color="#b06f13"/> :
                                <Text style={{ ...FONTS.h1 }}>{temperature}</Text>
                        }
                        <Text h1 size={44} height={80} weight='600' spacing={0.1}>°C</Text>
                    </Block>
                    <Block flex={1} column>
                        <Text caption>Temperature</Text>
                    </Block>
                </Block>

                <Block row style={{ paddingVertical: 30 }}>
                    <Block flex={1.5} row style={{}}>
                        {isGettingTemp ? <ActivityIndicator size="large" color="#b06f13"/> :
                                <Text style={{ ...FONTS.h1 }}>{humid}</Text>
                        }
                        <Text h1 size={44} height={80} weight='600' spacing={0.1}>%</Text>
                    </Block>
                    <Block flex={1} column>
                        <Text caption>Humidity</Text>
                    </Block>
                </Block> 

                <Block row>
                    <TouchableOpacity style={ {marginLeft:30} } activeOpacity={0.5} onPress={ () => setGettingTemp(true) }>
                        <Icon name='refresh' style={{ fontSize: 30, color: '#b06f13'}} />
                    </TouchableOpacity>
                </Block>
                <ScrollView contentContainerStyle={styles.buttons} showsVerticalScrollIndicator={false}>
                    <Block column space="between">
                           <Block row space="around" style={{ marginVertical: 50 }}>
                                <TouchableOpacity onPress={()=> LightChangeHandler(!isLightOn)}
                                    activeOpacity={0.8}
                                >
                                    <Block center middle style={styles.button}>
                                    <Image source={require('../assets/images/bulb.png')} 
                    style={{width: 50, height: 50}} />
                                    <Text
                                        button
                                        style={{ marginTop: 14 * 0.5 }}
                                    >
                                        Led
                                    </Text>
                                    </Block>
                                </TouchableOpacity>
              
                                <TouchableOpacity
                                    activeOpacity={0.8} onPress={()=> BuzzerChangeHandler(!isBuzzerOn)}
                                >
                                    <Block center middle style={styles.button}>
                                    <Image source={require('../assets/images/buzzer.png')} 
                    style={{width: 50, height: 50}} />
                                    <Text
                                        button
                                        style={{ marginTop: 14 * 0.5 }}
                                    >
                                        Buzzer
                                    </Text>
                                    
                                    </Block>
                                </TouchableOpacity>
              
                            </Block>
                    </Block>
                
                </ScrollView>
            
            </Block>
         </LinearGradient>

        </View>
    );
}

const styles = StyleSheet.create({
    dashboard: {
        flex: 1,
        padding: 28,
        marginBottom: -14 * 6,
    },
    buttons: {
        flex: 1,
        marginBottom: -14 * 6,
      },
    button: {
    backgroundColor: '#F4F5F7',
    width: 131,
    height: 131,
    borderRadius: 131 / 2,
    },
    body: {
        flex: 1,
    }
});

export default Home;