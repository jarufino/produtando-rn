import React, { useEffect, useState } from 'react';
import { Alert, AsyncStorage, BackHandler, Button, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {Profile, Cadastro, Edicao} from '../index';

export default function AreaRestrita({navigation}){
    const Tab=createMaterialBottomTabNavigator();
    const [user, setUser]=useState(null);
    useEffect(()=>{
        async function getUser(){
            let response=await AsyncStorage.getItem('userData');
            let json=JSON.parse(response);
            setUser(json.name);
        }
        getUser();
    },[]);
    useEffect(() => {
        const backAction = () => {
          Alert.alert("Ei!", "Tem certeza que deseja voltar?", [
            {
              text: "Não",
              onPress: () => null,
              style: "cancel"
            },
            { text: "Sim", onPress: () => {
                navigation.navigate('Home'); 
                BackHandler.exitApp();
            }
         }
          ]);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();
      }, []);
    return(        
            <Tab.Navigator activeColor='#FFD700' inactiveColor='yellow' barStyle={{ backgroundColor:'black' }}>
                <Tab.Screen name="Perfil" component={Profile} options={{tabBarIcon:({color})=>(<MaterialCommunityIcons name="account" color={'red'} size={26}/>)}}/>
                <Tab.Screen name="Cadastro" component={Cadastro} options={{tabBarIcon:({color})=>(<MaterialCommunityIcons name="boombox" color={'red'} size={26}/>)}}/>
                <Tab.Screen name="Edição" component={Edicao} options={{tabBarIcon:({color})=>(<MaterialCommunityIcons name="account-edit" color={'red'} size={26}/>)}}/>
            </Tab.Navigator>        
    );
}