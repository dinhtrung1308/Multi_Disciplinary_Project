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
} from "react-native";

function ToggleButton({input}){ // the parameter has to be as the form {input}
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


const WarningSetup = () => {

    return (
        <SafeAreaView style={styles.container}>

            <View style={{marginTop: 30, width: "60%", alignItems: "flex-start"}}>
                <Text style={{paddingLeft: 1}}>WARNING NAME</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter warning name...">
                </TextInput>
            </View>

            <View
                style={{
                    marginTop: 30,
                    flexDirection: "row",
                    width: "60%",
                    justifyContent: "space-between"
                }}
            >
                <View>
                    <Text
                        style={{
                            paddingLeft: 1
                        }}
                    >
                        MAX
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter max...">
                    </TextInput>
                </View>

                <View>
                    <Text style={{paddingLeft: 1}}>MIN</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter min...">
                    </TextInput>
                </View>
            </View>

            <View style={{ marginTop: 30,width: "60%"}}>
                <Text style={{ paddingLeft: 1}}>SELECT DATE</Text>
                <View style={{ marginTop: 4, flexDirection: "row", width: "100%",justifyContent: "space-between"}}>
                    <ToggleButton input = {"Mon"}></ToggleButton>
                    <ToggleButton input = {"Tue"}></ToggleButton>
                    <ToggleButton input = {"Wed"}></ToggleButton>
                </View>
                <View style={{ marginTop: 5, flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                    <ToggleButton input = {"Thu"}></ToggleButton>
                    <ToggleButton input = {"Fri"}></ToggleButton>
                    <ToggleButton input = {"Sat"}></ToggleButton>
                    <ToggleButton input = {"Sun"}></ToggleButton>
                </View>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={{ fontSize: 20, color: "white" }}>Add Warning</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E5E4E2",
        // width: "100%",
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
        margin: 30,
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
        height: 60,
        width: 60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 60
    },
    dateButtonOn: {
        backgroundColor: "orange",
        color: "white",
        height: 60,
        width: 60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 60
    }
})

export default WarningSetup;