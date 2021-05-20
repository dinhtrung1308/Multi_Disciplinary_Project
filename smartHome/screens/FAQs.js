import React, { useState } from "react";
import { View, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

import { Header, Left, Right, Icon, Body, Content } from 'native-base';
import { FONTS } from '../constants';
const DATA = [
  {
    id: "1",
    title: "Question 1",
  },
  {
    id: "2",
    title: "Question 2",
  },
  {
    id: "3",
    title: "Question 3",
  },
  {
    id: "4",
    title: "Question 4",
  },
  {
    id: "5",
    title: "Question 5",
  },
  {
    id: "6",
    title: "Question 6",
  },
  {
    id: "7",
    title: "Question 7",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>

);

const FAQs = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#cc9960" : "#FFCC66";
      const color = item.id === selectedId ? 'white' : 'black';
      return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
};

return (
  <SafeAreaView style={styles.container}>
    <View style={ {flex: 1} }>
          <Header style={ {backgroundColor:'black'} }>
              <Left style={ {flex:1} }>
                  <Icon name="menu" style={{color: '#b06f13', fontSize:FONTS.h3.fontSize}} onPress={ () => navigation.openDrawer() } />
              </Left>
              <Body style={ {flex:1} } >
                  <Text style={ {color:'#b06f13', fontFamily : FONTS.h3.fontFamily, fontSize:FONTS.h3.fontSize} }> FAQs </Text>
              </Body>
              <Right style={ {flex:1} } />
          </Header>  
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      extraData={selectedId}
    />
    </View>
  </SafeAreaView>
);
};


const styles = StyleSheet.create({
container: {
  flex: 1,
  marginTop: 0,
},
item: {
  padding: 20,
  marginVertical: 8,
  marginHorizontal: 16,
},
title: {
  fontSize: 12 ,
},
});

export default FAQs; 