import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Button,
    StyleSheet,
    Modal
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/dist/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/dist/Ionicons"
import Entypo from "react-native-vector-icons/dist/Entypo"

function WarningPopupHandle(warning) {
    const [modalVisible, setModalVisible] = useState(false);

    const deleteWarning = (warningID) => {
        console.log("Delete Warning")
        fetch('http://127.0.0.1:3000/api/warning/delete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userID: warning.data.userID,
                warningID: warningID
            })
        }).then(res => res.json())
            .then(data => {
                setModalVisible(!modalVisible)
                warning.navigation.pop()
                warning.navigation.navigate('WarningLoading', { userToken: warning.data.userID })
            }).catch(err => {
                console.log("error", err)
            })
    }

    return (
        <View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(true)}
            >
                <Text style={{ color: "white" }}>View</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modal}>
                        <View style={styles.infoContainer}>
                            {warning.data.sensorType == "light" ? <MaterialCommunityIcons name='lightbulb-on-outline' size={30} color="orange" /> : (warning.data.sensorType == "heat" ? <Ionicons name='md-thermometer-outline' size={30} color="orange" /> : <Entypo name='air' size={30} color="orange" />)}
                            <Text style={{ fontSize: 25 }}>{warning.data.warningName}</Text>
                            <View style={styles.minmax}>
                                <Text style={{ color: "gray", fontSize: 15 }}>Max: {warning.data.maxValue}</Text>
                                <Text style={{ color: "gray", fontSize: 15 }}>Min: {warning.data.minValue}</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => deleteWarning(warning.data._id)}
                            >
                                <Text style={{ color: "white" }}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={styles.buttonClose}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={{ color: "black" }}>X</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        justifyContent: 'center',
        alignItems: 'center',
        // opacity: 0.5,
        height: "100%",
        width: '100%',
    },
    modal: {
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 3,
        borderColor: 'orange',
        width: "80%",
        padding: 10
    },
    infoContainer: {
        width: "100%",
        flexDirection: 'column',
        alignItems: 'center'
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: "orange"
    },
    buttonClose: {
        padding: 10,
        position: 'absolute',
        right: 0,
        top: 0
    },
    minmax: {
        flexDirection: 'row',
        width: "50%",
        justifyContent: 'space-evenly'
    }
})

export default WarningPopupHandle;