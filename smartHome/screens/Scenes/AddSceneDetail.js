import { Icon } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import {
    View,
    Text,
    TextInput
} from "react-native";
import { Block } from "../../components"
import { FONTS } from '../../constants';

function AddSceneDetail({navigation}){
    return (
        <View style={ {flex: 1} }>
            <Block row style={{ minheight:'40%', margin:15 }}>
                    
                <Block middle flex={2} row style={{ padding: 5 }}>
                    
                    <TouchableOpacity style={{borderRadius:25, backgroundColor:'white'}}>
                        <Icon name='sunny' style={{ fontSize: 50, color: 'gold'}} />
                    </TouchableOpacity>
                    
                </Block>
                
                <Block left flex={9} column style={{}}>
                    
                    <Block row left flex={2.5} style={{margin:5}}>
                        <Text style={{flex:1, fontSize:12}}>SCENE NAME</Text>
                    </Block>

                    <Block row left flex={7.5} style={{margintop:5, borderRadius:10, backgroundColor: "white",}}>
                        <View style={styles.inputContainer}>
                            <TextInput
                            style={styles.input}
                            placeholder={'Good Afternoon'}
                            placeholderTextColor={'gray'}
                            underlineColorAndroid='transparent'
                            />
                        </View>
                    </Block>
                        
                    </Block>
            </Block>
            
            <Block column style={{ margin: 20, flex: 1 }}>
                <Text style={FONTS.h2}>Actions</Text>
                <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('AddAction')}>
                    <Text style={{flex:0.8, paddingRight:5}}>Add what you want to happen when this scene runs</Text>
                    <Icon name='add-circle-sharp' style={{flex: 0.1, color:'black',fontSize: 35}}></Icon>
                </TouchableOpacity>
            </Block>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        fontSize: 17,
        color: 'black',
      },
    inputContainer: {
        flex: 1,
    },
    button: {
        marginTop: 10,
        padding: 12,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 20,
    }
})

export default AddSceneDetail;