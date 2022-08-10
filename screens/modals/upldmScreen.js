import React, { useEffect, useState } from "react";
import {View, Text, TouchableOpacity, Alert, Image, ScrollView, FlatList, Dimensions, Modal} from 'react-native'
import CardTopic from "../../components/card/cardTopic";
import { globalStyles } from "../../style/global";
import { AntDesign, Ionicons } from '@expo/vector-icons';
import CardMenuIcon from "../../components/card/cardMenuicon";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { render } from "react-dom";
import ImageModalScreen from "./imageModalScreen";
import CommentModalScreen from "./commentScreeen";
import BaseContainer from "../../components/propsOuter";

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
    const[selIndx, setSelIndx] = useState(-1)
    const[selImage, setSelImage] = useState(null)
    const[openCmnt, setOpenCmnt] = useState(false)

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

    const renderItem = ({item, index})=>{
        return(
            <TouchableOpacity onPress={() => showImageView(index, item)}>
                <Image source={{uri:item}}  
                    style={{width:scrnWdth/3, height:scrnWdth/3, marginVertical:1,
                    marginHorizontal:1
                }} />
            </TouchableOpacity>
        )
    }

    const showImageView = (index, item)=>{
      //  console.log(item)
        setSelIndx(index)
        setSelImage(item)
    }

    const pressMenuIcon = (menuName)=>{
        
        if(menuName === "openCam"){
            //console.log(navigation)
            navigation.navigate("TakePic")
        }
        else if(menuName == "comments"){
            setOpenCmnt(true)
        }
    }

    const closeModal = ()=>{
       // Alert.alert("go back")
       setSelIndx(-1)
       //navigation.goBack()
    }

    const delPicture = ()=>{
        let filteredItems = upldImages.splice(selIndx, 1)
        closeModal()
        //Alert.alert('delete picture')
    }

    const closeComment = ()=>{
        setOpenCmnt(false)
    }

    const saveComment = ()=>{
        Alert.alert('save comment')
    }

    return(
        <BaseContainer>
        <View style={{flex:1, backgroundColor:'#fff'}}>
            {/* <Text>{item.Id}</Text> */}
            <CardTopic>
                <Text style={{textAlign:'justify', flex:1}}>{item.Name}</Text>
            </CardTopic>

            <View style={{flexDirection:"row", marginHorizontal:0, 
                marginVertical:0, justifyContent:"space-around",
                borderBottomWidth:1,paddingVertical:6,
                borderBottomColor:'#c7c7c7'
                }}>

                {/* <CardMenuIcon>
                    <AntDesign menuName="openVideo" name="videocamera" size={28} color="#ad3141" />
                </CardMenuIcon> */}
                <CardMenuIcon pressMenuIcon={() => pressMenuIcon('folder')}>
                    <AntDesign name="folder1" size={28} color="green" />
                </CardMenuIcon>
                <CardMenuIcon pressMenuIcon={()=> pressMenuIcon('openCam')}>
                    <AntDesign name="camera" size={28} color="green" />
                </CardMenuIcon>
                <CardMenuIcon pressMenuIcon={() => pressMenuIcon('comments')}>
                    <AntDesign name="filetext1" size={28} color="green" />
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
            <View style={{flex:0.92, marginHorizontal:1}}>
                <FlatList
                    numColumns={3}
                    data={upldImages}
                    keyExtractor={(item, index) => index }
                    renderItem={renderItem}
                />
            </View>
            {
                selIndx > -1 &&
                <ImageModalScreen selImage={selImage} closeModal={closeModal}
                    delPicture={delPicture}
                />

            }

            {
                openCmnt &&
                <CommentModalScreen closeComment={closeComment} saveComment={saveComment} />    
            }    

            {/* <Text>{site.Name} </Text> */}

        </View>
        </BaseContainer>    
    )
}

export default UpldModalScreen