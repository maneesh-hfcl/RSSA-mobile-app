import React from "react";
import {View, Text, StyleSheet} from 'react-native'

const CardMenuIcon = ({children})=>{
    return(
        <View style={styles.card_icon_container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    card_icon_container:{
        marginHorizontal:10,
        marginVertical:0, 
        borderColor:'#bcd1e3', 
        borderBottomWidth:1,
        borderRightWidth:1, 
        borderRadius:5,
        backgroundColor:'#e9f0f7',
        paddingVertical:8,
        paddingHorizontal:20,
    }
})

export default CardMenuIcon;