import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useEffect, useState } from "react";
import { Alert , Text} from "react-native";
import ProcessBaseComponent from "../../components/processBase";
import {listProcesses} from "../../data/processList";
import AccountScreen from "../../screens/accountScreen";

const Tab = createMaterialTopTabNavigator();
const TabProcessScreen = ()=>{
    const[processes, setProcesses] = useState([])

    

    useEffect(()=>{
        //Alert.alert('helo')
        //console.log(listProcesses())
        const data = listProcesses() //listProcesses()
        setProcesses(data)
        console.log(data)
    }
    ,[])

    if(processes.length < 1)
        return null;
    
    return(
            
            <Tab.Navigator screenOptions={{tabBarScrollEnabled:true}} 
                defaultScreenOptions ={{
                    tabBarLabelStyle:{textTransform:"none"},
                    
                }}
            >
            {
               
                processes.map( (item, index) => 
                    <Tab.Screen key={index} name={"screen"+item.Id} initialParams={{processId:item.Id}} component={ProcessBaseComponent} options={{title:item.Name}} />
                )
                
            }
            
            </Tab.Navigator>

        
    )
            {/* <Tab.Screen name="Process2" component={AccountScreen} />
            <Tab.Screen name="Process3" component={AccountScreen} />
            <Tab.Screen name="Process4" component={AccountScreen} />
            <Tab.Screen name="Process5" component={AccountScreen} />
            <Tab.Screen name="Process6" component={AccountScreen} />
            <Tab.Screen name="Process7" component={AccountScreen} />
            <Tab.Screen name="Process8" component={AccountScreen} /> */}
        
}

export default TabProcessScreen;
