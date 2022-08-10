import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TakePictureComp from "../../components/camera/capturePic";
import UpldModalScreen from "../../screens/modals/upldmScreen";
import ProcessScreen from "../../screens/siteProcessScreen";
import SitesScreen from "../../screens/sitesScreen";
import TabProcessScreen from "../tab/tabProcess";
import { Entypo, Ionicons } from '@expo/vector-icons';
import {View, Text, TouchableOpacity} from 'react-native';

const Stack = createNativeStackNavigator()

const Header = ()=>{
    return(
       <View style={{flexDirection:"row"}}>
            <Text style={{fontSize:16}}>Image/Video</Text>
            <Entypo name="images" size={20} color="black" style={{marginHorizontal:10}} />
        </View>
    )
}

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
            <Stack.Group screenOptions={{presentation:'fullScreenModal'}}>
                <Stack.Screen name="UpldModal" component={UpldModalScreen} 
                    options={({navigation, route})=>(
                        {
//                            title: 'Image/Video'
                            headerTitle:(props) => <Header {...props} />,
                            headerBackVisible:false,
                            headerTitleAlign:'center'
                        })
                    } />
                <Stack.Screen name="TakePic" component={TakePictureComp}
                    options={{
                        title:'Add picture/ video'
                    }}
                />    
            </Stack.Group>
            
        </Stack.Navigator>
    )
}

export default StackSiteScreen;