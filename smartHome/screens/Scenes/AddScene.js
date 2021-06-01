import React from 'react';
import {
    View,
    Text,
} from "react-native";
import { Header, Left, Right, Icon, Body } from 'native-base';
import { FONTS } from '../constants';
function AddScene({navigation}){
    return (
        <View style={ {flex: 1} }>
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text> AddScene </Text>
            </View>
        </View>
    );
}

export default AddScene;