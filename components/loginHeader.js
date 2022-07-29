import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

export default LoginHeader = ()=>{
    return(
        <View style={styles.container}>
            <MaterialIcons name="settings-remote" size={44} color="orange" />
            <Text style={styles.first_text}>Remote Site</Text>
            <Text style={styles.second_text}>Self Audit</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:0.8,

        justifyContent:'center',
        alignItems:'center',
    },
    first_text:{
        fontSize:18,
        marginVertical:10,
        color:'#7c29a6',
        fontWeight:'bold'
    },
    second_text:{
        fontSize:25,
        color:"green",

    }
})
