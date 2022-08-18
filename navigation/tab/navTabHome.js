
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AccountScreen from "../../screens/accountScreen";
import HomeScreen from "../../screens/homeScreen";
import SitesScreen from "../../screens/sitesScreen";
import StackSiteScreen from "../stack/siteStack";


const Tab = createMaterialTopTabNavigator()



const TabHomeScreen = ()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="SitesStack" component={StackSiteScreen} 
                options={{title:"Site"}}  />
            <Tab.Screen name="Account" component={AccountScreen} />

        </Tab.Navigator>
    )
}

export default TabHomeScreen;