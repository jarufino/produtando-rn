import React from 'react';
import { AsyncStorage, Text, TouchableOpacity, View } from 'react-native';
import {css} from '../css/Css';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function MenuAreaRestrita(props){
    async function logout(){
        await AsyncStorage.clear();
        props.navigation.navigate('Login');
    }
    return(
        <View style={css.area_menu}>
            <TouchableOpacity style={css.button_home} onPress={()=>props.navigation.navigate('Home')}>
                <Icon name="home" size={20} color="#999"/>
            </TouchableOpacity>
            <Text style={css.area_title}>{props.title}</Text>
            <TouchableOpacity style={css.button_logout} onPress={()=>logout()}>
                <Icon name="sign-out" size={20} color="#999"/>
            </TouchableOpacity>
        </View>
    );
}