import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
    Platform,
    StatusBar,
    TextInput,
    Alert,
} from "react-native";

// function postData(url = '', data = {}) {
//     // Default options are marked with *
//     const response = /*await*/ fetch(url, {
//       method: 'POST', // *GET, POST, PUT, DELETE, etc.
//       mode: 'cors', // no-cors, *cors, same-origin
//       cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: 'same-origin', // include, *same-origin, omit
//       headers: {
//         'X-AIO-Key': 'aio_VCRY26z1VxEaO9on6SgmJUvy07QG',
//         'Content-Type': 'application/json'
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: 'follow', // manual, *follow, error
//       referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//       body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     // return response.json(); // parses JSON response into native JavaScript objects
// }

// function compileData(){
//     let url = 'https://io.adafruit.com/api/v2/KaNology/feeds/iot/data'
//     let data = { "value": "I'm An!"}
//     postData(url, data)
// }

function ToggleButton({ input }) { // the parameter has to be as the form {input}
    const [state, setState] = useState(false);
    const stateInput = () => {
        setState(!state);
    }

    return (
        <TouchableOpacity onPress={stateInput} style={state ? styles.dateButtonOn : styles.dateButton}>
            <Text>{input}</Text>
        </TouchableOpacity>
    );
}


const WarningSetup = ({ navigation, route }) => {

    console.log('WarningSetup')

    const userToken = route.params.userToken
    const sensorType = route.params.sensorType

    const [warningName, setWarningName] = useState('');
    const [minValue, setMinValue] = useState('');
    const [maxValue, setMaxValue] = useState('');

    const sendData = () => {
        fetch('http://127.0.0.1:3000/api/warning', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userID: userToken,
                sensorType: sensorType,
                warningName: warningName,
                minValue: minValue,
                maxValue: maxValue
            })
        }).then(res => res.json())
            .then(data => {
                navigation.pop()
                navigation.push('WarningLoading', { userToken: userToken })
            }).catch(err => {
                console.log("error", err)
            })
    }

    const checkWarningName = (EnteredValue) => {
        var TextLength = EnteredValue.length.toString();
        if (TextLength == 15) {
            Alert.alert("Sorry, You have reached the maximum input limit.")
        }
        else {
            setWarningName(EnteredValue)
        }
    }

    const checkMaxMin = (Max, Min) => {
        if(Max <= Min){
            Alert.alert("The minimum should not be greater than the maximum.")
            return false
        }
        else {
            return true
        }
    }

    const onSubmit = () => {
        if(checkMaxMin(maxValue, minValue)){
            sendData()
            Alert.alert("Warning is successfully created.")
        }
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={{ marginTop: 30, width: "80%", alignItems: "flex-start" }}>
                <Text style={{ paddingLeft: 1 }}>WARNING NAME</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter warning name..."
                    onChangeText={warningName => checkWarningName(warningName)}
                    defaultValue={warningName}
                    maxLength={15}
                >
                </TextInput>
            </View>

            <View
                style={{
                    marginTop: 30,
                    flexDirection: "row",
                    width: "80%",
                    justifyContent: "space-between"
                }}
            >
                <View
                    style={{ flex: 1, marginRight: 2.5 }}
                >
                    <Text
                        style={{
                            paddingLeft: 1
                        }}
                    >
                        MAX
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter max..."
                        onChangeText={maxValue => setMaxValue(maxValue)}
                        defaultValue={maxValue}
                        keyboardType='numeric'
                    >
                    </TextInput>
                </View>

                <View
                    style={{ flex: 1, marginLeft: 2.5 }}
                >
                    <Text style={{ paddingLeft: 1 }}>MIN</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter min..."
                        onChangeText={minValue => setMinValue(minValue)}
                        defaultValue={minValue}
                        keyboardType='numeric'
                    >
                    </TextInput>
                </View>
            </View>

            <View style={{
                margin: 30,
                width: "80%",
            }}>
                <Text
                    style={{
                        paddingLeft: 1
                    }}
                >
                    SELECT DATE
                </Text>
                <View style={{
                    marginTop: 4,
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between"
                }}>
                    <ToggleButton input={"Mon"}></ToggleButton>
                    <ToggleButton input={"Tue"}></ToggleButton>
                    <ToggleButton input={"Wed"}></ToggleButton>
                    <ToggleButton input={"Thu"}></ToggleButton>
                    <ToggleButton input={"Fri"}></ToggleButton>
                    <ToggleButton input={"Sat"}></ToggleButton>
                    <ToggleButton input={"Sun"}></ToggleButton>
                </View>
            </View>

            <TouchableOpacity style={styles.button}
                onPress={() =>
                    onSubmit()
                }
            >
                <Text style={{ fontSize: 20, color: "white" }}>Add Warning</Text>
            </TouchableOpacity>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E5E4E2",
        width: "100%",
        // justifyContent: "center",
        alignItems: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    section: {

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
    button: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "orange",
        padding: 10,
        borderRadius: 10,
        width: 200,
        height: 50,
        shadowColor: "black",
        shadowRadius: 10,
        shadowOpacity: 0.4,
    },
    dateButton: {
        backgroundColor: "#848482",
        color: "orange",
        height: 40,
        width: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 40
    },
    dateButtonOn: {
        backgroundColor: "orange",
        color: "white",
        height: 40,
        width: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 40
    }
})

export default WarningSetup;