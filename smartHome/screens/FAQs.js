import React, {Component} from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { Header, Left, Right, Icon, Body, Content } from 'native-base';
import {images, COLORS, FONTS, SIZES} from '../constants';

/**
 * Home screen
 */


export  default class FAQs extends Component {

    static navigationOptions = {
        title: 'FAQs',
    };
    

    render() {

        const { navigate } = this.props.navigation;
        

        return (
           
                   
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#F4A201' }}>
           

                <TouchableOpacity
                    style={[styles.shadow, { marginTop: SIZES.padding * 2, width: '70%', height: 50, alignItems: 'center', justifyContent: 'center' }]}
                    onPress={() => navigate('Chatbot')}
                >

                        <Text style={{ fontSize: 50}} >Start!</Text>

                </TouchableOpacity>
            </View>
        
        );

    }
    

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4A201',
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
});