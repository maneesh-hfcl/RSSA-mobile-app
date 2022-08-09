import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UpldModalScreen from "../../screens/modals/upldmScreen";
import SiteSurveyScreen from "../../screens/process/siteSurveyScreen";
import { Entypo, Ionicons } from '@expo/vector-icons';
import {View, Text, TouchableOpacity} from 'react-native';
import TakePictureComp from "../../components/camera/capturePic";
import { useEffect } from "react";

const Stack = createNativeStackNavigator()

const Header = ()=>{
    return(
       <View style={{flexDirection:"row"}}>
            <Text style={{fontSize:16}}>Image/Video</Text>
            <Entypo name="images" size={20} color="black" style={{marginHorizontal:10}} />
        </View>
    )
}



const StackSiteSurvey = ({siteRoute, navigation})=>{

    
    return(
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen name="SiteSurvey" component={SiteSurveyScreen} initialParams={{siteRoute:siteRoute}}  options={{headerShown:false}} />
                
            </Stack.Group>
            <Stack.Group screenOptions={{presentation:'fullScreenModal'}}>
                <Stack.Screen name="UpldModal" component={UpldModalScreen} 
                    options={({navigation, route})=>(
                        {
//                            title: 'Image/Video'
                            headerTitle:(props) => <Header {...props} />,
                            
                        })
                    } />
                <Stack.Screen name="TakePic" component={TakePictureComp}
                    options={{
                        title:'Add picture/ video'
                    }}
                />    
            </Stack.Group>
            <Stack.Group screenOptions={{presentation:''}}>
                
            </Stack.Group>
            
        </Stack.Navigator>
    )
}

export default StackSiteSurvey;