import { CheckBox } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native';
import {
    View,
    Text,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const optionList = [
    { key: "OFF" },
    { key: "RED" },
    { key: "GREEN" }
]

function EditLight({ navigation }) {
    
    const [checkBoxState, setCheckBoxState] = React.useState([false,false,false]);

    
    const hanleCheckBox = (item_index) => {
        let newCheckBoxState = [false,false,false];
        newCheckBoxState[item_index] = true;
        setCheckBoxState(newCheckBoxState);
    }

    return (
            <View style={styles.container}>
                
                <FlatList
                    data={optionList}
                    keyExtractor={item => item.key}
                    renderItem={(item) => {
                        return (
                            <View style={styles.item}>
                                <TouchableOpacity
                                    style={{
                                        flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 10
                                    }}
                                    onPress={() => hanleCheckBox(item.index)}
                                >
                                    <BouncyCheckbox
                                        isChecked
                                        disableBuiltInState
                                        isChecked={checkBoxState[item.index]}
                                        size={25}
                                        fillColor="black"
                                        unfillColor="#FFFFFF"
                                        text={item.item.key}
                                        iconStyle={{ borderColor: "black" }}
                                        textStyle={{
                                            fontWeight: '900',
                                            color: "black",
                                            textDecorationLine: "none",
                                          }}
                                        onPress={() => hanleCheckBox(item.index)}
                                    />
                                </TouchableOpacity>
                            </View>);
                    }}
            />

            <View style={{justifyContent: 'space-around', marginBottom: 20, flexDirection: 'row'}}>
                <TouchableOpacity style={{opacity:1}} onPress={() => {}}>
                    <Text
                        style={{ fontSize: 25, fontWeight: 'bold', color: 'dodgerblue' }}
                        onPress={() => {
                            let idx = checkBoxState.indexOf(true);
                            navigation.navigate('AddSceneDetail', {actionName: "LED", action_value: optionList[idx].key});
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
            
        </View>
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
        fontWeight: '900',
        color: 'black'
    },
    checkBox: {
        width: 20,
        height: 20,
        marginRight: 20,
    }
});
export default EditLight;