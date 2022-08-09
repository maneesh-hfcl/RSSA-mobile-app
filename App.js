import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackLoginScreen from "./navigation/stack/loginstack";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = ()=>{
    return(
        <NavigationContainer>
            <StackLoginScreen />
        </NavigationContainer>
        
    )
}

export default App;

/* ------------------------------- */

// import React, { useEffect, useState } from "react";
// import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
// import OpenCam from "./Camera/openCamera";
// import TakePicture from "./Camera/takePicture";

// const App = ()=>{
//     return(
//         <SafeAreaView style={styles.container}>
//             <TakePicture />            
//             {/* <OpenCam /> */}
//         </SafeAreaView>
//     )
// }

// export default App;

// const styles = StyleSheet.create({
//     container:{
//         flex:1
//     },

// })