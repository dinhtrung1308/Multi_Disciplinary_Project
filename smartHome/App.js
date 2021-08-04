/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabScreen from './routes/HomeStack';
import AuthStackTab from './routes/AuthStack';
import { AuthContext } from './components/Context';
import RNBootSplash from 'react-native-bootsplash';
const App = () => {
 
  React.useEffect(() => {
    RNBootSplash.hide({duration:2000})
  },[userToken])

  const [userToken, setUserToken] = React.useState(null);
  const [sceneList, setSceneList] = React.useState([]);

   const authContext = React.useMemo(() => {
     return {
       signIn: (_userToken, _sceneList) => {
         setSceneList(_sceneList);
         setUserToken(_userToken);
       },
       signUp: () => {
         setUserToken("some value")
        },
       signOut: () => {
         setUserToken(null)
         setSceneList([])
        },
     }   
    })
 
   return (
   <AuthContext.Provider value={authContext}>
         <NavigationContainer>
           {userToken ? (<TabScreen props={{userToken: userToken, sceneList: sceneList}} />) : (<AuthStackTab />)}
         </NavigationContainer>
     </AuthContext.Provider>
    
   );
 }
 
 export default App;
 
