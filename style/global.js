import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    },
    insideContainer:{
        alignItems:'center',
        marginVertical:10
    },
    text_input:{
        borderBottomWidth:1,
        borderColor:'#c7c7c7',
        marginHorizontal:5,
        paddingVertical:0,
        paddingHorizontal:5,
        marginVertical:5,
        fontSize:20
        
    },  
    text_login:{
        marginHorizontal:5,
        marginVertical:5,
        marginTop:20,
        paddingHorizontal:5,
        fontSize:18,
        

    },
    touchable_btn:{
//        backgroundColor:'#1270b5',
        backgroundColor:'#eb7405',
        alignSelf:'flex-end',
        marginVertical:5,
        marginHorizontal:5,
        paddingHorizontal:15,
        paddingVertical:8,
        borderRadius:5
    },
    touchable_btn_login:{
        //        backgroundColor:'#1270b5',
                backgroundColor:'#eb7405',
                alignItems:'center',
                marginVertical:15,
                marginHorizontal:5,
                paddingHorizontal:15,
                paddingVertical:12,
                borderRadius:5
            },
            
    text_btn:{
        color:'#fff',
        //fontWeight:'bold',
        fontSize:15
    },
    container_login:{
        marginHorizontal:20,
        backgroundColor:'#fff'  
     },
    item_outer_view:{
        borderTopWidth:1,
        backgroundColor:"#fff",
        borderTopColor:"gray",
        borderRadius:0,
        marginHorizontal:10,
        marginVertical:8,
        paddingHorizontal:5,
        paddingVertical:5
    },
    item_inner_view:{
        marginVertical:3,
        marginHorizontal:10,
        flexDirection:"row"    
    },
    item_left_text:{
        flex:0.3
    },
    item_right_text:{
        flex:0.7
    },
    touchable_btn_go:{
        borderRadius:5,
        backgroundColor:'#eb7405',
        color:'#fff',
        paddingVertical:5,
        paddingHorizontal:10,
        alignSelf:"center",
   
    },
    touchable_btn_logout:{
        marginVertical:20
    },
    card_bullet:{
        fontSize:4,
        color:'black',
        alignSelf:'auto',
        flex:0.08,
        marginVertical:5      
    },
    text_light:{
        color:'gray',
        marginTop:15,
        marginBottom:2
    },
    container_survey_screen:{
        paddingVertical:10,
        paddingHorizontal:20
    },
    touchable_btn_cancel:{
        //        backgroundColor:'#1270b5',
        backgroundColor:'#fff',
        borderColor:'#eb7405',
        borderWidth:1,

    },
    text_btn_cancel:{
        color:'#000'
    },
    text_light_gray:{
        color:'gray',
     },
     btn_green:{
        backgroundColor:'green',
        borderRadius:10,
        borderWidth:0,
        paddingHorizontal:10,
        paddingVertical:1,
        color:'#fff',
        marginBottom:5
     },


})