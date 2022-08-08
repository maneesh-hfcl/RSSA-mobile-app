import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet} from 'react-native'
import { Camera, CameraType } from "expo-camera";

const OpenCam = ()=>{
    const[hasCamPermission, setHasCamPermission] = useState(null)
    const[camType, setCamType] = useState(CameraType.back)

    useEffect(()=>{
        (async ()=>{
            const{status} = await Camera.requestCameraPermissionsAsync();
            setHasCamPermission(status === 'granted')
        })()
    } , [])

    if(hasCamPermission == null){
        return <View>
            <Text>No Permission</Text>
        </View>
    }
    
    if(hasCamPermission == false){
        return <View>
            <Text>No access to camera</Text>
        </View>
    }
    
    return(
        <View style={{flex:1}}>
            <Text>Open camera</Text>
            <Camera type={camType} style={{flex:1}}></Camera>
        </View>
    )
}

export default OpenCam;