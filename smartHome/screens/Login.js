import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { images,FONTS } from '../constants';
const windoWidth = Dimensions.get('window').width;
import {AuthContext} from "../components/Context"

function Login({navigation }) {

  
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = React.useState(false);


  const {signIn} = React.useContext(AuthContext);
  
  if (isLoading){
    return (
      <ImageBackground
          style={{flex: 1,
                  backgroundColor: 'black',
                  alignItems: 'center',
                  justifyContent: 'center',}}
          imageStyle={{ opacity: 0.5 }}
          source={images.backgroundImg}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{color:'gold', fontSize:20}}>Checking...</Text>
              <ActivityIndicator size="large" color="gold"></ActivityIndicator>
        </View>
      </ImageBackground>
    )
  }

  const onSubmit = () => {
    // Getting authentication state
    let userId;
    setIsLoading(true);
    fetch('http://127.0.0.1:3000/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: userName,
        password: password
      })
    }).then(res => res.json())
      .then(result => {
        if (result.status === "wrong") {
          alert('Wrong username/password');
        }
        else {
          userId = result._id;
          // Fetching user data
          return fetch('http://127.0.0.1:3000/api/scene/' + userId, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
          })
        }
      })
      .then(res => res.json())
      .then(res => {
        setIsLoading(false);
        signIn(userId, res.sceneList,userName);
      })
      .catch(function (error) {
        console.error('Error:', error);
      })
    
  }

  return (
    <ImageBackground
      style={styles.background}
      imageStyle={{ opacity: 0.5 }}
            source={images.backgroundImg}>
      <View style={{marginBottom:10}}>
        <Text style={styles.titleStyle}>HOME MANAGER</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={'Username'}
          placeholderTextColor={'rgba(255,255,255,0.7)'}
          underlineColorAndroid='transparent'
          onChangeText={userName => setUserName(userName)}
          defaultValue={userName}
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
        onPress={() => onSubmit()}
        style={styles.btnLogin}
        >
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('SignUp')} 
        style={styles.btnSignUp}
        >
        <Text style={styles.text}>Sign Up</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
  },
  titleStyle: FONTS.splash,
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
