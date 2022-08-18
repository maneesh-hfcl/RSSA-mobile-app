import React from "react";
import {View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../style/global";

const BaseContainer = ({children})=>{
    return(
        
            <KeyboardAvoidingView 
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={[globalStyles.container]}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <SafeAreaView style={globalStyles.container}>
                        {children}
                    </SafeAreaView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        
    )
}

export default BaseContainer;