import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native'

const CardMenuIcon = ({children})=>{
    //console.log(children)
    const pressMenuIcon = ()=>{
        const{menuName, navigation} = children.props
       // console.log(menuName)
        if(menuName === "openCam"){
            //console.log(navigation)
            navigation.navigate("TakePic")
        }

    }

    return(
        <View style={styles.card_icon_container}>
            <TouchableOpacity onPress={pressMenuIcon}>
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
        borderRadius:30,
        backgroundColor:'#bcd1e3',
        height:60,
        width:60,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default CardMenuIcon;