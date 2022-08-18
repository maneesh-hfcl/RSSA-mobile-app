import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "../../screens/homeScreen";
import LoginScreen from "../../screens/loginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabHomeScreen from "../tab/navTabHome";
import {View, Text, TouchableOpacity, Alert, Button} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScreenStackHeaderBackButtonImage } from "react-native-screens";
import FooterStack from "./footerStack";
import { FontAwesome } from '@expo/vector-icons';
//import { Button } from "react-native-web";

const Stack = createNativeStackNavigator()

const BottomTab = createBottomTabNavigator()

const BackButton = (navigation)=>{
    return(
        <TouchableOpacity onPress={(navigation)=> navigation.goBack()}>
            <Text>Back</Text>
        </TouchableOpacity>
    )
}


const BottomTabScreen = ({navigation})=>{
    return(
        <BottomTab.Navigator 
            screenOptions={
                    {
                        headerShown:false, 
                        tabBarStyle:{
                                backgroundColor:'#f8f8f8',

                            }  
                        
                    }} >
            <BottomTab.Screen name="HomeStack2" component={TabHomeScreen}
                
                options={{
                    tabBarButton:()=>null,
                    headerShown:false
                }}
            />
           
            <BottomTab.Screen name="Footer" 
                component={FooterStack}
                
                    options={{
                        headerTitle:null,
                                
                        tabBarLabel:"OHS Check-In",
                        tabBarIcon:()=><FontAwesome name="calendar-check-o" size={20} color="black" />,
                        tabBarLabelPosition:"below-icon",
                        headerTitleAlign:'center' 
                    // headerRight:(navigation) => <BackButton navigation={navigation} />,
                     
                        
                    }}
                /> 


        </BottomTab.Navigator>
    )
}

const StackLoginScreen = ()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Login" component={LoginScreen} />

            <Stack.Screen name="HomeStack" component={BottomTabScreen} />
        </Stack.Navigator>

    )
}

export default StackLoginScreen;