import React, {Component} from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { Header, Left, Right, Icon, Body, Content } from 'native-base';
import {images, COLORS, FONTS, SIZES} from '../constants';

/**
 * Home screen
 */

function FAQs({ navigation }) {
    return (
           
                   
        <View style={{ flex: 1,backgroundColor: '#F4A201' }}>
       
            <Header style={ {backgroundColor:COLORS.black} }>
                <Left style={ {flex:1} }>
                    <Icon name="menu" style={{color: '#b06f13', fontSize:FONTS.h3.fontSize}} onPress={ () => navigation.openDrawer() } />
                </Left>
                <Body style={ {flex:1} } >
                    <Text style={ {color:'#b06f13', fontFamily : FONTS.h3.fontFamily, fontSize:FONTS.h3.fontSize} }>FAQs</Text>
                </Body>
                <Right style={ {flex:1} } />
            </Header>

            <TouchableOpacity
                style={[styles.shadow, { marginTop: SIZES.padding * 2, width: '70%', height: 50, alignItems: 'center', justifyContent: 'center' }]}
                onPress={() => navigation.navigate('Chatbot')}
            >

                    <Text style={{ fontSize: 45}} >Start!</Text>

            </TouchableOpacity>
        </View>
    
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4A201',
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
});

export default FAQs;