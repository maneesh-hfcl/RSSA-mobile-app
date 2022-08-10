import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import { globalStyles } from "../../style/global";

const CardTopic = ({children})=>{
    return(
        <View style={styles.card_container}>
            <Text style={globalStyles.card_bullet}>{'\u2B24'}</Text>
            {children}
        </View>
    )
}

export default CardTopic;

const styles = StyleSheet.create({
    card_container:{
        marginHorizontal:0,
        marginVertical:0, 
        borderColor:'#bcd1e3', 
        borderBottomWidth:0, 
        borderRadius:0,
        backgroundColor:'#e9f0f7',
        paddingVertical:5,
        paddingHorizontal:8,
        flexDirection:'row',

    },
    outer_view_container:{
        marginHorizontal:10,
        marginVertical:3, 
        borderColor:'#bcd1e3', 
        borderBottomWidth:1,
         borderRadius:0,
        backgroundColor:'#e9f0f7',
        paddingVertical:5,
        paddingHorizontal:5,
    },

})