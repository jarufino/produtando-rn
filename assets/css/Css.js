import {StyleSheet} from 'react-native';
const css = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'      
    },
    containerTop:{
      justifyContent:'flex-start'
    },
    container2:{
      backgroundColor:'black',
      height:'100%',
      alignItems:"center" 
    },    
    os_inputs:{
      backgroundColor:"#fff",
      fontSize:17,
      borderRadius:20,
      padding: 7,
      marginBottom:15,
      width:270,
      textAlign:"center"      
    },
    containerdois: {
      flex: 1,
      top:-190,
      flexDirection:'row',      
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textPage:{
      color:'black'
    },
    buttonHome:{
      marginRight:80
    },
    darkbg:{
      backgroundColor:'#333'
    },
    login_msg:(text='none')=>({      
      fontSize:22,
      color:"red",      
      marginBottom:15,
      display:text
    }),
    login_logomarca:{
      marginBottom:10
    },  
    login_form:{
      width:"80%"      
    },
    login_input:{
      backgroundColor:"#fff",
      fontSize:19,
      padding: 7,
      marginBottom:15,
      textAlign:"center"
    },
    login_button:{
      padding: 12,
      backgroundColor:"#F58634",
      alignSelf:"center",
      borderRadius:5,      
    },
    login_buttonText:{
      fontWeight:"bold",
      fontSize:22,
      color:"#333"      
    },
    area_menu:{
      flexDirection:'row',
      paddingTop:40,
      paddingBottom: 10,
      width:'100%',
      backgroundColor:'#111',
      alignItems:'center',
      justifyContent:'center',
    },
    button_home:{
      textAlign:'left',

    },
    area_title:{
      width:'80%',
      fontWeight:'bold',
      fontSize:20,
      color:'white',
      textAlign:'center',
    },
    button_logout:{
      textAlign:'right'
    },
    alt_senha_buttonText:{
      backgroundColor:"yellow",
      color:"blue",
      fontWeight:"bold",
      fontSize:20,
      borderRadius:20,
      textAlign:"center",
      paddingTop:5,
      height:38   
    },
    msg_text:{
      fontSize:22,
      textAlign:"center",
      fontWeight:"900",
      paddingBottom:10,
      color:"#B0E0E6"
    },
    qr_code:(display='flex')=>({
      width:'100%',
      height:'100%',
      backgroundColor:'#000',
      justifyContent:'center',
      display:display 
    }),
    qr_form:(display='none')=>({
      width:'100%',
      display:display
    })
  });  
export {css};
