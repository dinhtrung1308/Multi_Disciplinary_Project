import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
} from "react-native";

// npm install react-native-vector-icons
import MaterialCommunityIcons from "react-native-vector-icons/dist/MaterialCommunityIcons"
import Entypo from "react-native-vector-icons/dist/Entypo"
import FontAwesome from "react-native-vector-icons/dist/FontAwesome"

import { images } from "../constants";

const WarningLoading = ({ navigation, route }) => {

    console.log('WarningLoading')

    const userToken = route.params.userToken

    const getWarningList = () => {
        fetch('http://127.0.0.1:3000/api/warning/getList', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userID: userToken
            })
        }).then(res => res.json())
            .then(data => {
                // console.log(data)
                navigation.pop()
                navigation.push('WarningList', {userToken: userToken, warningList: data.warning})
            }).catch(err => {
                console.log("error", err)
            })
    }

    return (
        <SafeAreaView style={styles.container}>

            <Text>Loading...</Text>
            {getWarningList()}

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

export default WarningLoading;