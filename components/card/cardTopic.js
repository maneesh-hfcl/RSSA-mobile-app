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
        marginHorizontal:10,
        marginVertical:10, 
        borderColor:'#bcd1e3', 
        borderWidth:0, 
        borderRadius:3,
        backgroundColor:'#fff',
        paddingVertical:5,
        paddingHorizontal:8,
        flexDirection:'row',

    },

})