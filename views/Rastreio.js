import React from 'react';
import { Button, Text, View } from 'react-native';
export default function Rastreio({navigation}){    
    return(
        <View>
            <Text>Oi, sou a view (componente) Rastreio</Text>
            <Button title="Login" onPress={()=>navigation.navigate('Login', {
                id:30
            })}/>
        </View>
    );
}