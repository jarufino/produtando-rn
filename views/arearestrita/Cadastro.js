import React, { useEffect, useState } from 'react';
import { AsyncStorage, Button, Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MenuAreaRestrita from '../../assets/components/MenuAreaRestrita';
import { css } from '../../assets/css/Css';
import config from '../../config/config';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';

export default function Cadastro({navigation}){    
    const address=config.origin;
    const [code, setCode]=useState(null);
    const [user, setUser]=useState(null);
    const [product, setProduct]=useState(null);
    const [response, setResponse]=useState(null);
    useEffect(()=>{
        getUser();
    },[]);
    useEffect(()=>{
        randomCode();
        setProduct(''); 
    },[response]);
    //Pegando o ID do usuário
    async function getUser(){
        let response=await AsyncStorage.getItem('userData');
        let json=JSON.parse(response);
        setUser(json.id);
    }
    //Gerando um código randômico
    async function randomCode(){
        let result = '';
        let length=20;
        let chars='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        setCode(result);
    }
    //Enviando Formulário
    async function sendForm(){
        let response=await fetch(config.urlRoot+'create',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                userId:user,
                code:code,
                product:product,
                local:address
            })
        });
        let json=await response.json();
        setResponse(json);
    }
    //Me responsabilizo para compartilhar o qrcode
    async function shareQR(){
        const image=config.urlRoot+'img/code.png';
        FileSystem.downloadAsync(
            image,
            FileSystem.documentDirectory+'code.png'
        ).then(({uri})=>{
            Sharing.shareAsync(uri);
        });
        await Sharing.shareAsync();
    }
    return(        
        <View style={[css.container, css.containerTop]}>
            <MenuAreaRestrita title='Cadastro' navigation={navigation}/>
            {response && (
                
                <View>
                    <Image source={{uri:response, height:180, width:180}}/>
                    <Button title='Compartilhar' onPress={()=>shareQR()}/>
                </View>
            )
            }            
            <View style={css.login_input}>                            
                <TextInput placeholder='Nome do Produto:' onChangeText={text=>setProduct(text)} value={product} />                
            </View>            
            <TouchableOpacity style={css.login_button} onPress={()=>sendForm()}>
                <Text>Cadastrar</Text>
            </TouchableOpacity>            
        </View>
        
        
        
    );
}