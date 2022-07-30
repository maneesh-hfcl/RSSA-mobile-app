import React from "react";
import {View, Text} from 'react-native'
import BaseContainer from "../components/propsOuter";
import { globalStyles } from "../style/global";

const HomeScreen = ()=>{
    console.log("home screen");
    return(
        <BaseContainer>
            <Text>Home Screen</Text>
        </BaseContainer>
    )
}

export default HomeScreen;