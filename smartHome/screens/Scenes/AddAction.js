import { Icon } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import {
    View,
    Text,
} from "react-native";
import { FONTS } from '../../constants';
function AddAction({navigation}){
    return (
        <View style={styles.container}>
            
            <TouchableOpacity style={styles.button} onPress={() => navigation.push("EditLight")}>
                <Icon name="md-bulb" style={{ flex: 0.2, fontSize: 35, color: '#307AFF'}}/>
                <Text style={{ flex:0.8, fontSize: 20, fontWeight:'600' }}>Light</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.push("EditBuzzer")}>
                <Icon name="md-notifications" style={{ flex: 0.2, fontSize: 35, color: '#307AFF'}}/>
                <Text style={{ flex:0.8, fontSize: 20, fontWeight:'600' }}>Buzzer</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 20,
        paddingHorizontal: '5%',
        justifyContent: 'flex-start',
    },
    button: {
        padding: 10,
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 10
    }
})

export default AddAction;