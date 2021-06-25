import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { Header, Left, Right, Icon, Body} from 'native-base';
import {images, COLORS, FONTS, SIZES} from '../../constants';

/**
 * Home screen
 */


function Feedback({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={ {flex: 1} }>
                <Header style={ {backgroundColor:'black'} }>
                    <Left style={ {flex:1} }>
                        <Icon name="menu" style={{color: 'white', fontSize:FONTS.h3.fontSize}} onPress={ () => navigation.openDrawer() } />
                    </Left>
                    <Body style={ {flex:1} } >
                        <Text style={ {color:'white', fontFamily : FONTS.h3.fontFamily, fontSize:FONTS.h3.fontSize} }>Feedback</Text>
                    </Body>
                    <Right style={ {flex:1} } />
                </Header>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    source={images.robot}
                    resizeMode="contain"
                    style={{
                        width: '160%',
                        height: '160%',
                    }}
                />
            </View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ alignItems: 'center', marginHorizontal: SIZES.padding }}>
                    <Text style={{ ...FONTS.h2 }}>Feedback</Text>
                    <Text style={{ color: COLORS.gray, marginTop: SIZES.padding, textAlign: 'center', ...FONTS.body3 }}>When you have a problem, please tell us! </Text>
                </View>

                <TouchableOpacity
                    style={[styles.shadow, { marginTop: SIZES.padding * 2, width: '70%', height: 50, alignItems: 'center', justifyContent: 'center' }]}
                    onPress={() => navigation.navigate('FeedbackForm')}
                >

                        <Text style={{ color: COLORS.yellowBrown, ...FONTS.h3 }}>Send!</Text>

                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

// export default class Feedback extends React.Component {

//     static navigationOptions = {
//         title: 'Feedback',
//     };
    

//     render() {

//         const { navigate } = this.props.navigation;
        

//         return (
//             <SafeAreaView style={styles.container}>
//             <View style={ {flex: 1} }>
//                 <Header style={ {backgroundColor:'black'} }>
//                     <Left style={ {flex:1} }>
//                         <Icon name="menu" style={{color: '#b06f13', fontSize:FONTS.h3.fontSize}} onPress={ () => navigation.openDrawer() } />
//                     </Left>
//                     <Body style={ {flex:1} } >
//                         <Text style={ {color:'#b06f13', fontFamily : FONTS.h3.fontFamily, fontSize:FONTS.h3.fontSize} }>Feedback</Text>
//                     </Body>
//                     <Right style={ {flex:1} } />
//                 </Header>
//             </View>
//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                 <Image
//                     source={images.robot}
//                     resizeMode="contain"
//                     style={{
//                         width: '160%',
//                         height: '160%',
//                     }}
//                 />
//             </View>

//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                 <View style={{ alignItems: 'center', marginHorizontal: SIZES.padding }}>
//                     <Text style={{ ...FONTS.h2 }}>Feedback</Text>
//                     <Text style={{ color: COLORS.gray, marginTop: SIZES.padding, textAlign: 'center', ...FONTS.body3 }}>When you have a problem, please tell us! </Text>
//                 </View>

//                 <TouchableOpacity
//                     style={[styles.shadow, { marginTop: SIZES.padding * 2, width: '70%', height: 50, alignItems: 'center', justifyContent: 'center' }]}
//                     onPress={() => navigate('FeedForm')}
//                 >

//                         <Text style={{ color: COLORS.yellowBrown, ...FONTS.h3 }}>Send!</Text>

//                 </TouchableOpacity>
//             </View>
//         </SafeAreaView>
//         );

//     }
    

// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
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

export default Feedback;