// import React from 'react';
// import {
//     View,
//     Text,
// } from "react-native";
// import { Header, Left, Right, Icon, Body } from 'native-base';
// function Warning({navigation}){
//     return (
//         <View style={ {flex: 1} }>
//             <Header>
//                 <Left>
//                     <Icon name="menu" onPress={ () => navigation.openDrawer() } />
//                 </Left>
//                 <Body />
//                 <Right />
//             </Header>
//             <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
//                 <Text> Warning </Text>
//             </View>
//         </View>
//     );
// }

// export default Warning;

import React from 'react';
import Navigator from '../routes/warningStack'


export default function Warning() {
  return(
    <Navigator/>
  )
}
