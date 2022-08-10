import React from "react";
import {View, Text, StyleSheet, Modal, Image, TouchableOpacity} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

const ImageModalScreen = ({selIndx, selImage, closeModal, delPicture})=>{
     return(
        <Modal>
            <SafeAreaView style={{flex:1, backgroundColor:'black'}}>
                <Image source={{uri:selImage}} style={{resizeMode:'contain', flex:1
                    }} />

                <View>
                    <View style={{flexDirection:"row"}}>
                        <TouchableOpacity style={[styles.vw_btn,{flex:0.5,alignItems:'center',
                                 flexDirection:'row'}]} onPress={closeModal}>
                                <Ionicons name="chevron-back-sharp" size={24} color="black" />
                                <Text style={styles.vw_text}>Back</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={delPicture}
                            style={[styles.vw_btn, {flexDirection:'row', flex:0.5, justifyContent:'flex-end', alignItems:'center', backgroundColor:'#facf66'}]}
                            >
                            <FontAwesome name="remove" size={20} color="black" style={{}} />
                            <Text style={styles.vw_text}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>



        </Modal>
    )
}

export default ImageModalScreen

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