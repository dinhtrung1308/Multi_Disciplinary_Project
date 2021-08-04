import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import { COLORS, FONTS } from '../constants';
const SplashScreen = ({ navigation }) => {
    React.useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login');
        }, 3500);
    });
    
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>HomeManager</Text>
                <Image
                    source={require('../assets/icons/LOGO.png')}
                    style={styles.logo}
                    resizeMode="stretch"
                />
        </View>
      </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: COLORS.black
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: FONTS.splash,
  });