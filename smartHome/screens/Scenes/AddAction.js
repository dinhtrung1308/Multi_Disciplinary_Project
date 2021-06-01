import React from 'react';
import {
    View,
    Text,
} from "react-native";
function AddAction({navigation}){
    return (
        <View style={ {flex: 1} }>
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text> AddAction </Text>
            </View>
        </View>
    );
}

export default AddAction;