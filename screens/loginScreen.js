import React from "react";
import {View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import LoginHeader from "../components/loginHeader";
import BaseContainer from "../components/propsOuter";
import { globalStyles } from "../style/global";

const LoginScreen = ({navigation})=>{
    
    const pressHandler = ()=>{
        navigation.navigate("HomeStack")
    }

    return(
        <BaseContainer>
            <LoginHeader />
            <View style={globalStyles.container_login}>
                <TextInput style={globalStyles.text_input} defaultValue='Username' />
                <TextInput style={globalStyles.text_input} defaultValue='Password' />
                <TouchableOpacity style={globalStyles.touchable_btn} onPress={pressHandler}>
                    <Text style={globalStyles.text_btn}>Login</Text>
                </TouchableOpacity>
            
            </View>
        </BaseContainer>
    )
}

export default LoginScreen;
