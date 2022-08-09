import React, { useEffect, useState } from "react";
import {View, Text, TouchableOpacity, Alert, Image, ScrollView, FlatList, Dimensions} from 'react-native'
import CardTopic from "../../components/card/cardTopic";
import { globalStyles } from "../../style/global";
import { AntDesign, Ionicons } from '@expo/vector-icons';
import CardMenuIcon from "../../components/card/cardMenuicon";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { render } from "react-dom";

const HeaderLeft = (navigation)=>{
    return(
        <TouchableOpacity onPress={()=> navigation.goBack()}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Ionicons name="chevron-back-sharp" size={20} color="black" />
                <Text>Back</Text>
            </View>
        </TouchableOpacity>
    )
}


const UpldModalScreen = ({navigation, route}) =>{
    const {item, site} = route.params
    const[upldImages, setUpldImages] = useState([])
    const[scrnWdth, setScrnWdth] = useState(Dimensions.get('screen').width)

    const viewImages = async ()=>{
        //Alert.alert("View images online")
        try{
            const jsonVal = await AsyncStorage.getItem('@storage_img')
            const images = JSON.parse(jsonVal)
            //console.log(images)
            if(images != null){
                setUpldImages(images)
            }
        }
        catch(e){

        }

    }

    useEffect(()=>{
        navigation.setOptions({
            headerLeft:()=>{return(<TouchableOpacity onPress={()=> navigation.goBack()}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Ionicons name="chevron-back-sharp" size={20} color="black" />
                <Text>Back</Text>
            </View>
            </TouchableOpacity>)
        }

        })
        viewImages()
    },[])

    const renderItem = ({item})=>{
        return(
            <Image source={{uri:item}} 
                style={{width:scrnWdth/3, height:scrnWdth/3, marginVertical:1,
                marginHorizontal:1
            }} />
        )
    }

    return(
        <View style={{flex:1}}>
            {/* <Text>{item.Id}</Text> */}
            <CardTopic>
                <Text style={{textAlign:'justify', flex:1}}>{item.Name}</Text>
            </CardTopic>

            <View style={{flexDirection:"row", marginHorizontal:10, marginVertical:10, justifyContent:"space-around"}}>
                <CardMenuIcon>
                    <AntDesign navigation={navigation} menuName="openCam" name="picture" size={28} color="#ad3141" />
                </CardMenuIcon>
                <CardMenuIcon>
                    <AntDesign menuName="openVideo" name="videocamera" size={28} color="#ad3141" />
                </CardMenuIcon>
                <CardMenuIcon>
                    <AntDesign name="folder1" size={28} color="#ad3141" />
                </CardMenuIcon>
                <CardMenuIcon>
                    <AntDesign name="filetext1" size={28} color="#ad3141" />
                </CardMenuIcon>
                
            </View>

            {/* <ScrollView style={{marginVertical:10}}>
                <View style={{flexDirection:'row', flexWrap:'wrap', flex:0.5}}>
                {
                    upldImages &&

                    upldImages.map((item, index) => 
                        <Image key={index} source={{uri:item}} style={{width:100, height:100, marginVertical:1,
                            marginHorizontal:1
                        }} />
                    )
                    
                }
                </View>

            </ScrollView> */}
            <View style={{flex:0.92}}>
                <FlatList
                    numColumns={3}
                    data={upldImages}
                    keyExtractor={(item, index) => index }
                    renderItem={renderItem}
                />
            </View>
            <View style={{}}>

            </View>

            {/* <Text>{site.Name} </Text> */}

        </View>

    )
}

export default UpldModalScreen