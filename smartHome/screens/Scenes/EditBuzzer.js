import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Alert
} from "react-native";

function EditBuzzer({ navigation }) {
    
    const [value, setValue] = React.useState(0);

    const checkvalue = (value) => {
        if(value < 0 || value > 1023){
            Alert.alert("Value should be between the range 0 to 1023")
            return false
        }
        else {
            return true
        }
    }

    return (
        <View style={styles.container}>

            <View style={{ marginTop: 30, width: "80%", alignItems: "flex-start" ,alignSelf:'center'}}>
                <Text style={styles.text}>Input value for buzzer(0-1023)</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Value for buzzer"
                    onChangeText={value => setValue(value)}
                    defaultValue={"0"}
                    maxLength={15}
                >
                </TextInput>
            </View>

            <View style={{justifyContent: 'space-around', marginBottom: 20, flexDirection: 'row'}}>
                <TouchableOpacity style={{opacity:1}} onPress={() => {}}>
                    <Text
                        style={{ fontSize: 25, fontWeight: 'bold', color: 'dodgerblue' }}
                        onPress={() => {
                            if (checkvalue(value)) {
                                navigation.navigate('AddSceneDetail', {actionName: "BUZZER", action_value: value});
                            }         
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
        justifyContent: 'space-between',
    },
    text: {
        marginBottom: 15,
        fontSize: 17,
        fontWeight: '900',
        color: 'black'
    },
    checkBox: {
        width: 20,
        height: 20,
        marginRight: 20,
    },
    input: {
        fontSize: 15,
        height: 40,
        width: "100%",
        marginTop: 3,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: "center",
        paddingLeft: 10,
        shadowColor: "black",
        shadowRadius: 5,
        shadowOpacity: 0.2,
    },
});
export default EditBuzzer;