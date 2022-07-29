import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackLoginScreen from "./navigation/stack/loginstack";

const App = ()=>{
    return(
        <NavigationContainer>
            <StackLoginScreen />
        </NavigationContainer>
    )
}

export default App;