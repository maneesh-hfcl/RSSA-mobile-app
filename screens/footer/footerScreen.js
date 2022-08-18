import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import BaseContainer from "../../components/propsOuter";
import { globalStyles } from "../../style/global";
import { AntDesign, Ionicons } from '@expo/vector-icons';
import StackOHSScreen from "../../navigation/stack/ohsStack";

const FooterScreen = ({navigation, route})=>{
    const[IsVisibleChkin, setIsVisibleChkin] = useState(false)

    useEffect(()=>{
        navigation.setOptions({
            headerLeft: ()=><BackButton />,
            headerRight:()=> <RightButton />
        })
        //setIsVisibleChkin(false)
       // Alert.alert("Footer screen");
    },[route])

    const BackButton = ()=>{
        
        return(
            <TouchableOpacity onPress={()=>{ setIsVisibleChkin(false); navigation.goBack()}} style={{flexDirection:'row', alignItems:'center'}}>
                <Ionicons name="chevron-back-sharp" size={20} color="black" />
                <Text>Back</Text>
            </TouchableOpacity>
        )
    }

    const RightButton = ()=>{
        return(
            <TouchableOpacity onPress={() => navigation.navigate('checkin')}>
                <AntDesign name="pluscircle" size={32} color="#eb7405" />
            </TouchableOpacity>
        )
    }

    const AddCheckIn = ()=>{
        setIsVisibleChkin(true)
    }

    const CheckInFalse = ()=>{
        setIsVisibleChkin(false)
    }

    return(
        //     <View style={{flex:1}}>
        //     {
        //         IsVisibleChkin?(
        //             <StackOHSScreen CheckInFalse={CheckInFalse} /> 
        //         ):(
        //             <TouchableOpacity onPress={()=> navigation.goBack()}>
        //             <Text>
        //                 Click to go back
        //             </Text>
        //         </TouchableOpacity>
        //         )
        //     }

        // </View>  
        <StackOHSScreen /> 
    )
}

export default FooterScreen

const styles = StyleSheet.create({
    padding_top:{
        paddingVertical:0
    }
})