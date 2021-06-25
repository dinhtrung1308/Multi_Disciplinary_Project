import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    Dimensions,
    Alert
} from "react-native";

import { images } from '../constants';
import appTheme from '../constants/theme';
import {AuthContext} from '../components/Context'
import { react } from '@babel/types';
// npm install axios
const windoWidth = Dimensions.get('window').width;


function SignUp({ navigation }) {
    const { signUp } = React.useContext(AuthContext);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = () => {

        // axios.post('http://localhost:4000/app/signup', registered)
        // .then(response => console.log(response.data))

        fetch('http://127.0.0.1:3000/api/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fullName: fullName,
                username: username,
                email: email,
                password: password,
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                Alert.alert('Register Successful.')
                navigation.navigate('Login')
            }).catch(err => {
                console.log("error", err)
            })

        setFullName('')
        setEmail('')
        setUsername('')
        setPassword('')
        signUp()
    };

    return (
        <ImageBackground
            style={{
                width: "100%",
                height: "100%",
                backgroundColor: 'black',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            imageStyle={{ opacity: 0.5 }}
            source={images.backgroundImg}>
            <View style={styles.background}>
                <View>
                    <Text style={styles.titleStyle}>Sign Up</Text>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Full Name'}
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                        underlineColorAndroid='transparent'
                        onChangeText={fullName => setFullName(fullName)}
                        defaultValue={fullName}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Email'}
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                        underlineColorAndroid='transparent'
                        onChangeText={email => setEmail(email)}
                        defaultValue={email}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={'username'}
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                        underlineColorAndroid='transparent'
                        onChangeText={username => setUsername(username)}
                        defaultValue={username}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Password'}
                        secureTextEntry={true}
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                        underlineColorAndroid='transparent'
                        onChangeText={password => setPassword(password)}
                        defaultValue={password}
                    />
                </View>

                <TouchableOpacity
                    onPress={() =>
                        onSubmit()
                    }
                    style={styles.btnSignUp}
                >
                    <Text style={styles.text}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: "90%",
        paddingBottom: 10,
        borderRadius: 20
    },
    titleStyle: {
        color: 'gold',
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: appTheme.FONTS.largeTitle.fontFamily
    },
    input: {
        width: windoWidth - 55,
        height: 50,
        borderRadius: 45,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0,0,0,0.35)',
        color: 'rgba(255,255,255,0.7)',
        marginHorizontal: 25,
    },
    inputContainer: {
        marginBottom: 10,
    },
    text: {
        color: 'rgba(255,255,255,1)',
        fontSize: 16,
        textAlign: 'center'
    },
    btnLogin: {
        width: windoWidth - 55,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'gold',
        justifyContent: 'center',
        marginBottom: 10,
    },
    btnSignUp: {
        width: windoWidth - 55,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'green',
        justifyContent: 'center'
    }
});

export default SignUp;
