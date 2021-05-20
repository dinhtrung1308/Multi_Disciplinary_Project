import React from 'react';
import {
    View,
    Text,
} from "react-native";
import { Header, Left, Right, Icon, Body } from 'native-base';
import { FONTS } from '../constants';
function FAQs({navigation}){
    return (
        <View style={ {flex: 1} }>
             <Header style={ {backgroundColor:'black'} }>
                <Left style={ {flex:1} }>
                    <Icon name="menu" style={{color: '#b06f13', fontSize:FONTS.h3.fontSize}} onPress={ () => navigation.openDrawer() } />
                </Left>
                <Body style={ {flex:1} } >
                    <Text style={ {color:'#b06f13', fontFamily : FONTS.h3.fontFamily, fontSize:FONTS.h3.fontSize} }>FAQs</Text>
                </Body>
                <Right style={ {flex:1} } />
            </Header>
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text> FAQs </Text>
            </View>
        </View>
    );
}

export default FAQs;