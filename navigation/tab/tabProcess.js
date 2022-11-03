import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useEffect, useState } from "react";
import { Alert , Text,View} from "react-native";
import ProcessBaseComponent from "../../components/processBase";
import {listProcesses} from "../../data/processList";
import AccountScreen from "../../screens/accountScreen";

const Tab = createMaterialTopTabNavigator();
const TabProcessScreen = ({route})=>{
    const[processes, setProcesses] = useState([])
    const {itemqry} = route.params
    console.log("itm" + itemqry.Name)
    

    useEffect(()=>{
        // Alert.alert('helo')
        //console.log(listProcesses())
        const data = listProcesses() //listProcesses()
        setProcesses(data)
       // console.log(data)
    //    processes.map( (item, index) =>{
    //         console.log("Index: " + item.Id + " Name:"+item.Name)
    //    })
    }
    ,[route])

    if(processes.length < 1)
        return null;
    
    return(
        
        // <View>
        //     <Text>hello</Text>
        // {
        //     processes.map((item,index)=> {
        //      return   <Text>dpme{item.Id} / {index}</Text>
        //     })
        // }
        // </View>
            <Tab.Navigator screenOptions={{tabBarScrollEnabled:true}} 
                defaultScreenOptions ={{
                    tabBarLabelStyle:{textTransform:"none"},
                }}
            >
                     {
                        processes.map((item, index) => 
                            <Tab.Screen key={index} name={"screen"+item.Id} 
                                initialParams={{processId:(index+1), site: itemqry}} 
                                component={ProcessBaseComponent} 
                                options={() =>({
                                    title:item.Name})
                                } 
                                />
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
