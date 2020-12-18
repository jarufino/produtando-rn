import React from 'react';
import { Image, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {css} from '../assets/css/Css';
export default function Home({navigation}){    
    return(
        <View style={css.containerdois}>
            <TouchableOpacity style={css.buttonHome} onPress={()=>navigation.navigate('Login')}>
                <Image source={require('../assets/img/icon.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Rastreio')}>
                <Image source={require('../assets/img/rastreioButton.png')}/>
            </TouchableOpacity>
        </View>
    );
}