import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet, Dimensions, Alert, TouchableOpacity} from 'react-native'
import { globalStyles } from "../../style/global";
import MapView, {Marker} from "react-native-maps"
import * as Location from 'expo-location'
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";


const CheckInForm = ({navigation}) =>{
    const[location, setLocation] = useState(null);
    const[mapLoc, setMapLoc] = useState(null)

    useEffect(()=>{
        (async()=>{
            let {status} = await Location.requestForegroundPermissionsAsync()
            if(status === 'granted'){
                let location = await Location.getCurrentPositionAsync()
                setLocation(location)
                console.log(location.coords.latitude)
                setMapLoc({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta:0.005,
                })
            }
            else{
                Alert.alert('Permission not granted for location access')
            }
        })()
    },[])

    return(
        <View style={[globalStyles.container, globalStyles.container_survey_screen]}>
            <View style={{marginBottom:10}}>
                <Text style={globalStyles.text_light}>Date</Text>
                <Text>{(new Date()).toLocaleDateString()}  {(new Date()).toLocaleTimeString()}</Text>
                <Text style={globalStyles.text_light}>Current Location (Lat / Lng)</Text>
                <Text>
                    { mapLoc != null?mapLoc.latitude+'  /':'Getting coordinates..'}
                    
                    { mapLoc != null?'  ' +mapLoc.longitude:''}
                </Text>
                {/* <Text style={globalStyles.text_light}>Work Station</Text>
                <Text>Current Location</Text> */}
            </View>
            {
                mapLoc &&
            <View>
            <View style={{borderWidth:1, borderColor:'#c7c7c7', 
                alignSelf:'stretch', 
                justifyContent:'center',
                alignItems:'center',
                marginVertical:5,
                width:Dimensions.get('window').width-48, height:Dimensions.get('window').width-98}}
                
            >
            

            
                <MapView
                    initialRegion={mapLoc} 
                    style={{alignSelf:'stretch', width:Dimensions.get('window').width-50, height:Dimensions.get('window').width-100}}
                >
                    
                        <Marker coordinate={mapLoc}
                            pinColor='red'
                        />
                    
                </MapView>
                   
            
            
            </View>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <TouchableOpacity style={[globalStyles.touchable_btn_login]}
                        onPress={() => navigation.navigate('OHSForm')}
                    >
                        <Text style={globalStyles.text_btn}>Save Location</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[globalStyles.touchable_btn_login, globalStyles.touchable_btn_cancel]}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={[globalStyles.text_btn, globalStyles.text_btn_cancel]}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
            }
            <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
            {
                !mapLoc && 
                <View>
                    <Text style={{color:'gray', marginVertical:0, alignSelf:'center'}}>Please wait...</Text>
                    <Text style={{color:'gray', marginVertical:10}}>Loading location on map</Text>
                    <TouchableOpacity style={[globalStyles.touchable_btn_login, globalStyles.touchable_btn_cancel,{marginVertical:30}]}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={[globalStyles.text_btn, globalStyles.text_btn_cancel]}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            }
            </View>
        </View>
    )
}

export default CheckInForm