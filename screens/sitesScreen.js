import { BaseNavigationContainer } from "@react-navigation/native";
import React,{useState, useEffect} from "react";
import {View, Text} from 'react-native'
import BaseContainer from "../components/propsOuter";
import ResultList from "../components/resultList";

const SitesScreen = ({navigation})=>{
    const[items, setItems] = useState(null)

    const data = [
        {"Id":1, "Name":"HFCL", 
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
 
    ]
    const loadList = ()=>{
        setItems(data)
    }

    useEffect(()=>
        loadList()
    ,[])

    const onItemClick = (item)=>{
        //console.log(item)
        navigation.navigate("Process")

    }

    return(
        <BaseContainer>
            <ResultList onItemClick={onItemClick} items={items} />
        </BaseContainer>
    )
}

export default SitesScreen;