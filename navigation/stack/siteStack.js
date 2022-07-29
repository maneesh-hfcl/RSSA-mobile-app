import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProcessScreen from "../../screens/siteProcessScreen";
import SitesScreen from "../../screens/sitesScreen";

const Stack = createNativeStackNavigator()

const StackSiteScreen = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Sites" component={SitesScreen} options={{headerShown:false}} />
            <Stack.Screen name="Process" component={ProcessScreen} />
        </Stack.Navigator>
    )
}

export default StackSiteScreen;