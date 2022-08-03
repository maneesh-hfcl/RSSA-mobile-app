import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProcessScreen from "../../screens/siteProcessScreen";
import SitesScreen from "../../screens/sitesScreen";
import TabProcessScreen from "../tab/tabProcess";

const Stack = createNativeStackNavigator()

const StackSiteScreen = ()=>{
    const getHeaderTitle = (route)=>{
        //const routeName = getFocusedRouteNameFromRoute(route)??'Processs';
        if(route.params)
        {
        const {itemqry} = route.params
      // console.log(itemqry)
        return itemqry.Name
        }
        return "Process"
    }

    return(
        <Stack.Navigator>
            <Stack.Screen name="Sites" component={SitesScreen}  
                options={({route}) =>({
                    headerTitle:getHeaderTitle(route),
                    headerShown: false
                })  } 
            />
            <Stack.Screen name="Process" component={TabProcessScreen}
                  options={({route}) =>({
                    headerTitle:getHeaderTitle(route)
                    
                })  }  
            
            />
            
        </Stack.Navigator>
    )
}

export default StackSiteScreen;