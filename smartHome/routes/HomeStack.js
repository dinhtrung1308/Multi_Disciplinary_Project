import React from 'react';
import {Text, StyleSheet,Image } from 'react-native';
import {
  createDrawerNavigator,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Home,Automatics,FAQs,Feedback} from '../screens';
import { ScrollView } from 'react-native-gesture-handler';
import { images } from '../constants';
import  WarningTabStack  from './warningStack';
import  SceneTabStack  from './SceneStack';
import {Content,Icon } from 'native-base';

function DrawerContent({...props}){
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#fff'}}>
      <Image source={images.logo} style={styles.logo} />

      <Text style={styles.appText}>HOME MANAGER</Text>
      <Content>
        <DrawerItemList {...props} />
      </Content>
    </ScrollView>
  );
 }


const homeDrawerStack = createDrawerNavigator();
  
const TabScreen = ({ route, navigation }) => {
    return (
      <homeDrawerStack.Navigator
        drawerContent={props => <DrawerContent {...props} />}
      >
        <homeDrawerStack.Screen
          name="Home"
          initialParams={{ params: route.params }}
          component={Home}
          options={{
            drawerIcon: ({focused,color,size}) => (
              <Icon name='home' style={ {fontSize: size, color: 'gold'} } />
            ),
          } }
        />
        <homeDrawerStack.Screen
          name="Scene"
          component={SceneTabStack}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Icon name='bulb' style={{ fontSize: size, color: 'gold'}} />
            ),
          }}
        />
        <homeDrawerStack.Screen
          name="Automatics"
          component={Automatics}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Icon name='md-play-forward' style={{ fontSize: size, color: 'gold' }} />
            ),
          }}
        />
        <homeDrawerStack.Screen
          name="Warning"
          component={WarningTabStack}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Icon name='ios-alert' style={{ fontSize: size, color: 'gold' }} />
            ),
          }}
        />
        <homeDrawerStack.Screen
          name="FAQs"
          component={FAQs}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Icon name='book' style={{ fontSize: size, color: 'gold' }} />
            ),
          }}
        />
        <homeDrawerStack.Screen
          name="Feedback"
          component={Feedback}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <Icon name='md-chatbox' style={{ fontSize: size, color: 'gold' }} />
            ),
          }}
        />
      </homeDrawerStack.Navigator>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: 'black',
    borderRadius: 45
  },
  appText: {
    fontSize: 25,
    marginTop: 20,
    marginLeft: 20,
    fontWeight: "bold",
    color: 'black',
    marginVertical: 8
  }
});

export default TabScreen;
  
  