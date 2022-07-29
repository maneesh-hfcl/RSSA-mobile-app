import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "../../screens/homeScreen";
import LoginScreen from "../../screens/loginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabHomeScreen from "../tab/navTabHome";

const Stack = createNativeStackNavigator()

const StackLoginScreen = ()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="HomeStack" component={TabHomeScreen} />
        </Stack.Navigator>

    )
}

export default StackLoginScreen;