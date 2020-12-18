import React, { useEffect, useState } from 'react';
import { AsyncStorage, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {css} from '../../assets/css/Css';
import MenuAreaRestrita from '../../assets/components/MenuAreaRestrita';
import config from '../../config/config';
export default function Profile({navigation}){
    const [idUser,setIdUser]=useState(null);
    const [senhaAntiga,setSenhaAntiga]=useState(null);
    const [novaSenha,setNovaSenha]=useState(null); 
    const [confNovaSenha,setConfNovaSenha]=useState(null);
    const [msg,setMsg]=useState(null);
    useEffect(()=>{
        async function getIdUser(){
            let response=await AsyncStorage.getItem('userData');
            let json=JSON.parse(response);
            setIdUser(json.id);
        }
        getIdUser();
    });
    async function sendForm(){
        let response=await fetch(`${config.urlRoot}verifyPass`,{
            method:'POST',
            body: JSON.stringify({
                id: idUser,
                senhaAntiga: senhaAntiga,
                novaSenha: novaSenha,
                confNovaSenha: confNovaSenha
            }),
            headers:{
                Accept: 'application/json',
                'Content-Type':'application/json'
            }
        });
        let json=await response.json();
        setMsg(json); 
    }
    return(
        <View style={[css.container2, css.containerTop]}>
            <MenuAreaRestrita title='Perfil' navigation={navigation}/>
            <View>
                <Text style={css.msg_text}>{msg}</Text>
                <TextInput style={css.os_inputs} placeholder='Senha Antiga:' onChangeText={text=>setSenhaAntiga(text)} />
                <TextInput style={css.os_inputs} placeholder='Nova Senha:' onChangeText={text=>setNovaSenha(text)} />
                <TextInput style={css.os_inputs} placeholder='Confirmação da Nova Senha:' onChangeText={text=>setConfNovaSenha(text)} />
                <TouchableOpacity onPress={()=>sendForm()}>
                    <Text style={css.alt_senha_buttonText}>Trocar Senha</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}