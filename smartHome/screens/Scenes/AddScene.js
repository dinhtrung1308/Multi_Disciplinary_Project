import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView
} from "react-native";
import { Header, Left, Right, Icon, Body } from 'native-base';
import { COLORS, FONTS, images } from '../../constants';
import { StyleSheet } from 'react-native';

function AddScene({ route, navigation }) {

    return (
        <SafeAreaView style={{ flex: 1}}>
            <Header style={ {backgroundColor:COLORS.black} }>
                <Left style={ {flex:1} }>
                    <Icon name="menu" style={{color: '#b06f13', fontSize:FONTS.h3.fontSize}} onPress={ () => navigation.openDrawer() } />
                </Left>
                <Body style={ {flex:1} } >
                    <Text style={ {color:'#b06f13', fontFamily : FONTS.h3.fontFamily, fontSize:FONTS.h3.fontSize} }>Scenes</Text>
                </Body>
                <Right style={ {flex:1} } />
            </Header>
                <View style={styles.container}>
                    <Image source={images.scene} style={styles.image} />

                    <View style={ {padding:10} }>
                        <Text style={FONTS.h2}>Scenes</Text>
                    </View>
                
                    <View style={{ padding: 10, width: '70%' }}>
                        <Text style={{ textAlign: 'center', fontFamily: FONTS.body1.fontFamily, fontSize: 17 }}>
                            Link your devices and action together with a single tap or command
                        </Text>
                    </View>
                
                    <View style={styles.button}>
                        <TouchableOpacity
                            onPress={ () => navigation.navigate("AddSceneDetail")}
                            style={{ flex: 1, flexDirection:'row' ,justifyContent: 'center', alignItems: 'center' }}>
                            <Icon name='add' style={{color:'white',fontSize: 20}}></Icon>
                            <Text style={{
                                paddingLeft: 5,
                                fontSize: 16,
                                fontWeight: 'bold',
                                color: "white",
                                }}>Add Scenes</Text>
                        </TouchableOpacity>
                    </View>
                
                </View>   
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#307AFF',
        margin: 10,
        padding: 10,
        borderRadius: 20,
        width: "80%",
        height: "8%",
    },
    image: {
        width: "80%",
        height: "30%",
    }
})

export default AddScene;