import React from 'react';
import { Text, View } from 'react-native';
import {css} from '../assets/css/Css';
export default function Page(props){
    return (
        <View>
            <Text style={css.textPage}>{props.empresa}</Text>
            <Text>Tem o seguinte produto={props.produto}{"\n"}            
             Na quantidade={props.quantidade}</Text>
        </View>
    )
}