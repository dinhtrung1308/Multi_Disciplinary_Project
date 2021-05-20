import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from "react-native";
import { Header, Left, Right, Icon, Body, Switch } from 'native-base';
import { FONTS } from '../constants';
import { Block } from '../components'
function Home({ navigation }) {
    
    const [isLightOn, setLightSwitch] = React.useState(false);
    const [isBuzzerOn, setBuzzerSwitch] = React.useState(false);

    const LightChangeHandler = (value) => {
        setLightSwitch(value);
    }

    const BuzzerChangeHandler = (value) => {
        setBuzzerSwitch(value);
    }

    return (
        <View style={ {flex: 1} }>
            <Header style={ {backgroundColor:'black'} }>
                <Left style={ {flex:1} }>
                    <Icon name="menu" style={{color: '#b06f13', fontSize:FONTS.h3.fontSize}} onPress={ () => navigation.openDrawer() } />
                </Left>
                <Body style={ {flex:1} } >
                    <Text style={ {color:'#b06f13', fontFamily : FONTS.h3.fontFamily, fontSize:FONTS.h3.fontSize} }> SHome </Text>
                </Body>
                <Right style={ {flex:1} } />
            </Header>
            
            <Block style={styles.dashboard}>
                <Block column style={{ marginVertical: 14 * 2, }}>
                    <Text style={ {...FONTS.welcome} }>Welcome!</Text>
                    <Text style={ {...FONTS.name} }>Duc Bao</Text>
                </Block>

                <Block row style={{ paddingVertical: 10 }}>
                    <Block flex={1.5} row style={{ alignItems: 'flex-end', }}>
                        <Text style={{...FONTS.h1}}>34</Text>
                        <Text h1 size={34} height={80} weight='600' spacing={0.1}>°C</Text>
                    </Block>
                    <Block flex={1} column>
                        <Text caption>Humidity</Text>
                    </Block>
                </Block>

                <ScrollView contentContainerStyle={styles.buttons} showsVerticalScrollIndicator={false}>
                    <Block column space="between">
                        <Block row space="around" style={{ marginVertical: 14 }}>
                            
                            <Block center middle style={styles.button}>
                                <Icon name='bulb' style={{ fontSize: 38, color: '#b06f13'}} />
                                <Text
                                    style={{ marginTop: 24 * 0.5, color: '#b06f13' }}
                                >
                                    LED
                                </Text>
                            </Block>
                    
                            <Block center middle style={styles.button}>
                                <Icon name='notifications' style={{ fontSize: 38, color: '#b06f13'}} />
                                <Text
                                    style={{ marginTop: 24 * 0.5, color: '#b06f13' }}
                                >
                                    Buzzer
                                </Text>
                            </Block>

                        </Block>
                        
                        <Block row space="around">
                            
                            <Block center middle>
                                <Switch value={isLightOn}  onValueChange={ (value) => LightChangeHandler(value) }></Switch>
                            </Block>
                        
                            <Block center middle>
                                <Switch value={isBuzzerOn } onValueChange={ (value) => BuzzerChangeHandler(value) }></Switch>
                            </Block>
                        </Block>
                    </Block>
                
                </ScrollView>
            
            </Block>

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
        width: 120,
        height: 120,
        borderRadius: 60,
    }
});

export default Home;