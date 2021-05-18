import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Dimensions, TextInput, TouchableOpacity} from 'react-native';
import { images } from '../constants';
import appTheme from '../constants/theme';
const windoWidth = Dimensions.get('window').width;

function Login({navigation }) {

  return (
    <ImageBackground
            style={styles.background}
            source={images.backgroundImg}>
      <View>
        <Text style={styles.titleStyle}>SHOME</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={'Username'}
          placeholderTextColor={'rgba(255,255,255,0.7)'}
          underlineColorAndroid='transparent'
         />
      </View>

      <View style={styles.inputContainer}>
         <TextInput
          style={styles.input}
          placeholder={'Password'}
          secureTextEntry={true}
          placeholderTextColor={'rgba(255,255,255,0.7)'}
          underlineColorAndroid='transparent'
         />
      </View>

      <TouchableOpacity
        onPress={() => navigation.push('Home')} 
        style={styles.btnLogin}
        >
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.push('SignUp')} 
        style={styles.btnSignUp}
        >
        <Text style={styles.text}>Sign Up</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
      flex : 1,
      alignItems: 'center',
      justifyContent: 'center'
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

export default Login;