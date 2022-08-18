import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import FooterScreen from "../../screens/footer/footerScreen";


const Modal1 =({navigation})=>{
    const closeModal = ()=>{
       navigation.goBack() 
    }
    return(
        <View>
            <Text>Modal1</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>Close</Text>
            </TouchableOpacity>
        </View>
    )
}

const Modal2 =()=>{
    return(
        <View>
            <Text>Modal2</Text>
        </View>
    )
}



const Stack = createNativeStackNavigator()

const FooterStack = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Group screenOptions={{presentation:'card'}}>
                <Stack.Screen name="FooterScreen" component={FooterScreen}
                    options={{
                        title:'OHS Check-In'
                    }}
                />
                <Stack.Screen name="Modal2" component={Modal2} />
            </Stack.Group> 
        </Stack.Navigator>
    )
}

export default FooterStack;