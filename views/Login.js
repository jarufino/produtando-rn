import React, { useState } from 'react';
import { AsyncStorage, Image, KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {css} from '../assets/css/Css';
import config from '../config/config';
export default function Login({navigation}) {
    const [display,setDisplay]=useState('none');
    const [user,setUser]=useState(null);
    const [password,setPassword]=useState(null);
    const [login,setLogin]=useState(null);
    //Estou enviando formulário de Login
    async function sendForm() {
        let response=await fetch(`${config.urlRoot}login`,{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-type':'application/json'
            },
            body: JSON.stringify({
               name:user,
               password:password
            })
        });
        let json=await response.json();
        if(json==='errou'){
            setDisplay('flex');
            setTimeout(()=>{
                setDisplay('none')
            },3200);
        }else {
            await AsyncStorage.setItem('userData', JSON.stringify(json));
            navigation.navigate('AreaRestrita'); 
        }
    }

    return (        
        <KeyboardAvoidingView behavior={Platform.OS=="ios" ? "padding":"heigth"} style={[css.container, css.darkbg]}>
            <View style={css.login_logomarca}>
                <Image source={require('../assets/img/logomarca.png')}/>                
            </View>
            <View>
                <Text style={css.login_msg(display)}>Usuário ou Senha Inválidos</Text>
            </View>
            <View style={css.login_form}>
                <TextInput style={css.login_input} placeholder='usuário' autoCapitalize='none' onChangeText={text=>setUser(text)}/>
                <TextInput keyboardType="numeric" style={css.login_input} placeholder='senha' autoCapitalize='none' onChangeText={text=>setPassword(text)} secureTextEntry={true}/>
                <TouchableOpacity style={css.login_button} onPress={()=>sendForm()}>
                    <Text style={css.login_buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>         
        </KeyboardAvoidingView>
        
    );
}