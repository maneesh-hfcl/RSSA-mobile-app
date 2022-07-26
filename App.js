import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const App = ()=>{
    return(
        <View style={styles.container}>
            <Text>First line text</Text>
            <Text style={styles.text}>Second line text {3}</Text>
            <Text>Third line text comes here</Text>
            <StatusBar style="inverted" />
        </View>
    )
}

export default App;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color:'red',
        fontSize:20
    }
})