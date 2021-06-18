/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import TabScreen from './routes/HomeStack';
 import AuthStackTab from './routes/AuthStack';
 import {AuthContext} from './components/Context'
 
 const App = () => {
 
   const [userToken, setUserToken] = React.useState(null);
  //  const [userName, setUserName] = React.useState('');
 
   const authContext = React.useMemo(() => {
     return {
       signIn: (userToken) => {
         setUserToken(userToken)
       },
       signUp: () => {
         setUserToken("some value")
        },
       signOut: () => {
         setUserToken(null)
        },
     }   
    })
 
   return (
   <AuthContext.Provider value={authContext}>
         <NavigationContainer>
           {userToken ? (<TabScreen props={{userToken: userToken}} />) : (<AuthStackTab />)}
         </NavigationContainer>
     </AuthContext.Provider>
     
   );
 }
 
 export default App;
 
