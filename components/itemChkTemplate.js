import React from "react";
import {View, Text, Switch, StyleSheet, TouchableOpacity} from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { globalStyles } from "../style/global";

const ItemChklistTemplate = ({item, toggleSwitch, UploadContent})=>{
    return(
        <View style={styles.outer_view_container}>
                <View style={{flexDirection:'row'}}>
                    <Text style={globalStyles.card_bullet}>{'\u2B24'}</Text>
                    <Text style={{flex:1,marginRight:5}}>{item.Name}</Text>
                    <Switch style={{alignSelf:"flex-start"}}
                        value={item.Checked}
                        onValueChange={() => toggleSwitch(item)}
                    />
                </View>
                {item.Checked &&
                    <View style={[styles.upload_container]}>
                        <TouchableOpacity style={styles.btn_upload} onPress={() => UploadContent(item)}>
                            <Entypo name="images" size={20} color="black" style={{marginHorizontal:10}} />
                            <Text style={{color:"#0252d1"}}>Upload</Text>
                        </TouchableOpacity>
                    </View>
                }
        </View>
    )
}

export default ItemChklistTemplate;

const styles = StyleSheet.create({
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
    upload_container:{
        marginVertical:10,
        flexDirection:"row-reverse",
    },
    btn_upload:{
        borderWidth:1,
        borderColor:"lightgray",
        borderRadius:5,
        flexDirection:"row-reverse",
        paddingHorizontal:0,
        paddingRight:10,
        paddingVertical:3,
        alignItems:"center",
        backgroundColor:'#e7fcd2'
    }    
})