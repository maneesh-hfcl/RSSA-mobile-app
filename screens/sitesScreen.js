import { BaseNavigationContainer } from "@react-navigation/native";
import React,{useState, useEffect} from "react";
import {View, Text, ScrollView} from 'react-native'
import BaseContainer from "../components/propsOuter";
import ResultList from "../components/resultList";
import { globalStyles } from "../style/global";

const SitesScreen = ({navigation})=>{
    const[items, setItems] = useState(null)

    const data = [
        {"Id":1, "Name":"HFCL sector 32 gurugram, Haryana 122001", 
            "Address":"Plot 38, Gurugram 32",
            "Pincode":"122001",
            "Lat":28.44616, "Long": 77.0413349,
             "Description":"First site allocated "},
        {"Id":2, "Name":"JIO Fibre",
            "Address":"Plot 32, Near Medanta Medical hostpital, Gurugram 32",
            "Pincode":"122001",
            "Lat":28.44616, "Long": 77.0413349,
             "Description":"Second site allocated "},
        {"Id":3, "Name":"HFCL 2", 
            "Address":"Plot 32, Gurugram 32",
            "Pincode":"122001",
            "Lat":28.441794, "Long": 77.0396063,
             "Description":"Third site allocated "},
        {"Id":4, "Name":"HFCL 2", 
            "Address":"Plot 32, Gurugram 32",
            "Pincode":"122001",
            "Lat":28.441794, "Long": 77.0396063,
             "Description":"Third site allocated "},
        {"Id":5, "Name":"HFCL 2", 
            "Address":"Plot 32, Gurugram 32",
            "Pincode":"122001",
            "Lat":28.441794, "Long": 77.0396063,
             "Description":"Third site allocated "},
 
    ]

    const loadList = ()=>{
        setItems(data)
        console.log(data);
    }

    useEffect(()=>{
    console.log("site screen");
        loadList()

    }
    ,[])

    const onItemClick = (item)=>{
        //console.log(item)
        navigation.navigate("Process",{itemqry: item})

    }

    return(
        
        <View style={[globalStyles.container, {paddingVertical:10}]}>
            <ResultList onItemClick={onItemClick} items={items} />
        </View>
        
    )
}

export default SitesScreen;