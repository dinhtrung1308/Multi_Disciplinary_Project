import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
    Platform,
    StatusBar,
    FlatList,
    Button
} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/dist/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/dist/Ionicons"
import Entypo from "react-native-vector-icons/dist/Entypo"
import WarningPopupHandle from "./WarningPopup/WarningPopupHandle"


const WarningList = ({ navigation, route }) => {

    console.log('WarningList')

    const userToken = route.params.userToken
    const dataWarning = route.params.warningList

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={dataWarning}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item._id}
                renderItem={({ item }) =>
                    <View style={styles.item}>
                        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                            {item.sensorType == "light" ? <MaterialCommunityIcons name='lightbulb-on-outline' size={30} color="orange" /> : (item.sensorType == "heat" ? <Ionicons name='md-thermometer-outline' size={30} color="orange" /> : <Entypo name='air' size={30} color="orange" />)}

                            <View style={{ marginLeft: 10 }}>
                                <View style={{ width: 90 }}>
                                    <Text numberOfLines={1}>{item.warningName}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <WarningPopupHandle navigation={navigation} data={item}/>
                    </View>
                }
            />

            <View style={{
                backgroundColor: "orange",
                padding: 30,
                borderRadius: 15,
                marginTop: 10,
                marginBottom: 10
            }}>

                <TouchableOpacity
                    onPress={() => {
                        navigation.pop()
                        navigation.navigate('WarningSelect', { userToken: userToken })
                    }}
                >
                    <Text style={{
                        fontSize: 20,
                        color: "white"
                    }}>ADD WARNING</Text>
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
    },
    item: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        paddingHorizontal: 5,
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
        paddingVertical: 5,
        justifyContent: "space-between"
    },
    text: {
        color: "gray",
        marginRight: 5,
        width: 45
    }
})

export default WarningList;