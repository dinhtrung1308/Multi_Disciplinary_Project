import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
    Platform,
    StatusBar,
} from "react-native";

// This is used for expo
// import { MaterialCommunityIcons, Entypo, Ionicons } from "@expo/vector-icons"

// npm install react-native-vector-icons
import MaterialCommunityIcons from "react-native-vector-icons/dist/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/dist/Ionicons"
import Entypo from "react-native-vector-icons/dist/Entypo"

const WarningSelect = ({ navigation }) => {

    const pressHandler = () => {
        navigation.navigate('WarningSetup')
    }

    return (
        <SafeAreaView style={styles.container}>

            <Text style={{
                fontSize: 30
            }}>Select Sensor</Text>

            <View style={{
                marginTop: 10,
                width: "100%",
                height: "65%",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <TouchableOpacity style={{
                    margin: 10,
                    borderWidth: 3,
                    borderColor: "orange",
                    borderRadius: 20,
                    justifyContent: "center",
                    padding: 10,
                }}
                onPress = {pressHandler}>
                    <MaterialCommunityIcons
                        name='lightbulb-on-outline'
                        size={80}
                        color="orange"
                    />
                    <Text style={{
                        fontSize: 10,
                        textAlign: "center"
                    }}>
                        Light Sensor
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    margin: 10,
                    borderWidth: 3,
                    borderColor: "orange",
                    borderRadius: 20,
                    justifyContent: "center",
                    padding: 10,
                }}
                onPress = {pressHandler}>
                    <Ionicons
                        name='md-thermometer-outline'
                        size={80}
                        color="orange"
                    />
                    <Text style={{
                        fontSize: 10,
                        textAlign: "center"
                    }}>
                        Heat Sensor
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    margin: 10,
                    borderWidth: 3,
                    borderColor: "orange",
                    borderRadius: 20,
                    justifyContent: "center",
                    padding: 10,
                }}
                onPress = {pressHandler}>
                    <Entypo
                        name='air'
                        size={80}
                        color="orange"
                    />
                    <Text style={{
                        fontSize: 10,
                        textAlign: "center"
                    }}>
                        Gas Sensor
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        width: "100%",
        // justifyContent: "center",
        alignItems: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }
})

export default WarningSelect;