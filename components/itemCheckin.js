import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from "../style/global";

const ItemCheckinTemplate = ({item})=>{
    return(
        <View style={[globalStyles.container_survey_screen, globalStyles.insideContainer, styles.item_container]}>
            <View style={[styles.item_container_row,{marginHorizontal:6, marginVertical:10}]}>
                <Text style={globalStyles.text_light_gray}>Date: </Text>
                <Text>{item.Date}</Text>
            </View>

        <View style={[styles.item_container_row]}>
            <View style={{alignItems:'flex-end'}}>
                <MaterialIcons name="location-pin" size={30} color="red" />
                <Text style={globalStyles.text_light_gray}>In</Text>
            </View>
            <View style={{flex:1,}}>
                <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:20, marginVertical:0}}>
                    <Text style={{marginBottom:5}}>{item.Checkin}</Text>
                    {
                        item.Checkout?(
                            <Text>{item.Checkout}</Text>
                        ):(
                            <TouchableOpacity style={globalStyles.btn_green}>
                                <Text style={[globalStyles.text_btn,{paddingVertical:1  }]}>Checkout</Text>
                            </TouchableOpacity>
                        )
                    }

                </View>
                <View style={{borderBottomWidth:1, borderBottomColor:'#98d991', marginBottom:5 }}></View>
                
            </View>

            <View>
                <MaterialIcons name="location-pin" size={30} color="red" />
                <Text style={globalStyles.text_light_gray}>Out</Text>
            </View>
            {/* <Text>{item.Date}</Text>
            <Text>{item.Checkin}</Text>
            <Text>{item.Checkout}</Text> */}
            
        </View>
            <View>
            <TouchableOpacity style={styles.btn_upload} >
                <Entypo name="images" size={20} color="black" style={{marginHorizontal:10}} />
                <Text style={{color:"#0252d1"}}>View OHS RSA Checklist</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default ItemCheckinTemplate;

const styles = StyleSheet.create({
    item_container:{
        marginVertical:0,
        borderBottomColor:'#eee',
        borderBottomWidth:3,
        paddingBottom:20
        },
    item_container_row:{
        flexDirection:'row',
        
    },
    btn_upload:{
        borderWidth:1,
        borderColor:"lightgray",
        borderRadius:12,
        flexDirection:"row-reverse",
        paddingHorizontal:0,
        paddingRight:10,
        paddingVertical:3,
        alignItems:"center",
        backgroundColor:'#e7fcd2'
    },    


})
