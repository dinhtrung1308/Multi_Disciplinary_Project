import React from "react";
import {
    View,
    Text,
    Button,
    Image,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
} from "react-native";

// npm install @expo/vector-icons
import { MaterialCommunityIcons, Entypo, FontAwesome } from "@expo/vector-icons"

const WarningHome = ({ navigation }) => {

    const pressHandler = () => {
        navigation.navigate('WarningSelect')
    }

    return (
        <SafeAreaView style={styles.container}>

            <Image source={{ uri: 'https://www.online-tech-tips.com/wp-content/uploads/2020/06/smarthome.jpeg' }}
                style={{
                    width: "80%",
                    height: "40%",
                    borderRadius: 20,
                    marginTop: 50
                }}
            />

            <View style={{
                marginTop: 20,
                marginBottom: 20
            }}>
                <Text style={{
                    fontSize: 20,
                    textAlign: "center"
                }}>Secure your home with many caution alerts!</Text>
            </View>

            <View style={{
                marginTop: 10,
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-evenly"
            }}>
                <MaterialCommunityIcons
                    name='lightbulb-on-outline'
                    size={40}
                    color="orange"
                />
                <FontAwesome
                    name='thermometer'
                    size={40}
                    color="orange"
                />
                <Entypo
                    name='air'
                    size={40}
                    color="orange"
                />
            </View>

            <View style = {{
                marginTop: 30
            }}>
                <Button style = {{
                    borderRadius: 40,
                }} 
                color="orange" 
                title="+ Add Warning" 
                onPress = {pressHandler}
                />
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

export default WarningHome;