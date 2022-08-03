import React from "react";
import {View, Text, TouchableOpacity} from 'react-native'
import BaseContainer from "../components/propsOuter";
import { globalStyles } from "../style/global";

const HomeScreen = ({navigation})=>{
    console.log("home screen");
    return(
        <BaseContainer>
            <View style={globalStyles.insideContainer}>
                <Text>
                    Dashboard screen
                </Text>
                <TouchableOpacity style={[globalStyles.touchable_btn_go,{marginVertical:20}]}
                    onPress={() => navigation.navigate("SitesStack")}
                >
                    <Text style={globalStyles.text_btn}>Go to Site Screen</Text>
                </TouchableOpacity>
            </View>

        </BaseContainer>
    )
}

export default HomeScreen;