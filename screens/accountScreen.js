import React from "react";
import {View, Text, TouchableOpacity} from 'react-native'
import BaseContainer from "../components/propsOuter";
import { globalStyles } from "../style/global";

const AccountScreen = ({navigation})=>{
    return(
        <BaseContainer>
            
            <Text>Logout from this application</Text>
            
            <TouchableOpacity 
                style={[globalStyles.touchable_btn_go, globalStyles.touchable_btn_logout]}
                onPress={() => navigation.navigate("Login") }
            >
                <Text style={[globalStyles.text_btn, {fontWeight:"normal"}]}>Logout</Text>
            </TouchableOpacity>
            
        </BaseContainer>
    )
}

export default AccountScreen;