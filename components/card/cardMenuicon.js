import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native'

const CardMenuIcon = ({children, pressMenuIcon})=>{
    return(
        <View style={styles.card_icon_container}>
            <TouchableOpacity  onPress={pressMenuIcon}>
                {children}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card_icon_container:{
        marginHorizontal:0,
        marginVertical:0, 
        borderColor:'#bcd1e3', 
        borderBottomWidth:0,
        borderRightWidth:0, 
        borderRadius:25,
        backgroundColor:'#e7fcd2',
        height:50,
        width:50,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default CardMenuIcon;