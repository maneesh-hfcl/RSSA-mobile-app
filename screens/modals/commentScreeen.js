import React from "react";
import {View, Text, StyleSheet, Modal, TextInput, TouchableOpacity} from 'react-native'
import { AntDesign, Ionicons, MaterialIcons, FontAwesome, Feather } from '@expo/vector-icons';
import BaseContainer from "../../components/propsOuter";

const CommentModalScreen = ({closeComment, saveComment}) =>{
    return(

            <Modal 
                transparent={true}
            >
                
                <View style={{ 
                        height:'35%', backgroundColor:'#fff', marginTop:'auto'}}>
                    <View style={{borderBottomWidth:1,borderBottomColor:'#c7c7c7',
                        paddingVertical:10,
                        paddingHorizontal:10,
                        backgroundColor:'#f5f5f5',
                        alignItems:'center',
                        borderTopColor:'black',
                        borderTopWidth:1
                        
                        }}>
                        <Text style={{fontWeight:'bold'}}>Add comments</Text>
                    </View>        
                    <TextInput style={{flex:1, backgroundColor:'#fff', textAlign:'left'}} multiline={true} /> 
                    <View style={{flexDirection:"row"}}>
                        <TouchableOpacity style={[styles.vw_btn,{flex:0.5,alignItems:'center',
                                 flexDirection:'row'}]} onPress={closeComment}>
                                <Ionicons name="ios-close-outline" size={24} color="black" />
                                <Text style={styles.vw_text}>Close</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity
                            style={[styles.vw_btn, {flexDirection:'row', flex:0.5, justifyContent:'flex-end', alignItems:'center', backgroundColor:'#facf66'}]}
                            onPress={saveComment}
                            >
                            <Feather name="check" size={24} color="black" />
                            <Text style={styles.vw_text}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </Modal>
    )
}

export default CommentModalScreen

const styles = StyleSheet.create({
    capture_btn:{

    },
    vw_capture_icon:{
        backgroundColor:'#3289ed',
        borderWidth:5,
        borderColor:"#79b4f7",
        height:40,
        width:40,
        borderRadius:20,
        alignSelf:'center'
    },
    vw_btn:{
        borderRightWidth:1,
        paddingLeft:10,
        borderBottomWidth:1,
        borderTopWidth:1,
        flex:1,
        paddingHorizontal:5,
        paddingVertical:0,
        borderColor:"#d9d9d9",
        backgroundColor:"#e9f0f7"
    },
    vw_text:{
        marginHorizontal:12,
        marginVertical:12
    }
})