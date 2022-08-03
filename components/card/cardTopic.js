import React from "react";
import {View, Text, StyleSheet} from 'react-native'

const CardTopic = ({children})=>{
    return(
        <View style={styles.card_container}>
            {children}
        </View>
    )
}

export default CardTopic;

const styles = StyleSheet.create({
    card_container:{
        marginHorizontal:10,
        marginVertical:10, 
        borderColor:'#bcd1e3', 
        borderWidth:0, 
        borderRadius:5,
        backgroundColor:'#b2daf7',
        paddingVertical:5,
        paddingHorizontal:8,
    }
})