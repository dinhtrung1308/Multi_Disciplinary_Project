import React from 'react';
import {
    View,
    Text,
} from "react-native";
import { Header, Left, Right, Icon, Body, Content } from 'native-base';
function Feedback({navigation}){
    return (
        <View style={ {flex: 1} }>
             <Header style={ {backgroundColor:'black'} }>
                <Left>
                    <Icon name="menu" style={{color: '#b06f13'}} onPress={ () => navigation.openDrawer() } />
                </Left>
                <Body />
                <Right />
            </Header>
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text> Feedback </Text>
            </View>
        </View>
    );
}

export default Feedback;