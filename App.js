import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Login, Rastreio} from './views'; 
import AreaRestrita from './views/arearestrita/AreaRestrita';
export default function App(){
  const Stack=createStackNavigator();  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title:"Perola Negra Cosmetics Quizz",headerStyle:{backgroundColor:"#333"}, headerTintColor:"#FFD700", headerTitleStyle:{fontWeight:'bold', alignSelf:'center'} }}></Stack.Screen>
        <Stack.Screen name="Login" component={Login} options={{ headerShown:false }}></Stack.Screen>
        <Stack.Screen name="Rastreio" component={Rastreio}></Stack.Screen>
        <Stack.Screen name="AreaRestrita" component={AreaRestrita} options={{headerShown:false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export default function App() {
//   const [product,setProduct]=useState('bola');
//   const [quantity,setQuantity]=useState(0);
//   useEffect(()=>{
//      if(quantity>0){
//        Alert.alert('Novo Produto Adicionado');
//      }
//   },[quantity]);
//   const props={
//     produto:product,
//     quantidade:quantity
//   }
//   return (
//     <View style={css.container}>
//       <Text>{product}</Text>
//       <StatusBar style="auto" />
//       <Page {...props}/>
//       <Text>{"\n"}</Text>
//       <Button title='Adicionar Produto' onPress={()=>setQuantity(quantity+1)}></Button>  
//     </View>
//   );
// }