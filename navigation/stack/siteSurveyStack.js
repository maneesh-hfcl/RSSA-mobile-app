import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UpldModalScreen from "../../screens/modals/upldmScreen";
import SiteSurveyScreen from "../../screens/process/siteSurveyScreen";
import { Entypo } from '@expo/vector-icons';
import {View, Text} from 'react-native';

const Stack = createNativeStackNavigator()

const Header = ()=>{
    return(
        <View style={{flexDirection:"row"}}>
            <Text style={{fontSize:16}}>Image/Video</Text>
            <Entypo name="images" size={20} color="black" style={{marginHorizontal:10}} />
        </View>
    )
}

const StackSiteSurvey = ({siteRoute})=>{
    return(
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen name="SiteSurvey" component={SiteSurveyScreen} initialParams={{siteRoute:siteRoute}}  options={{headerShown:false}} />
            </Stack.Group>
            <Stack.Group screenOptions={{presentation:'card'}}>
                <Stack.Screen name="UpldModal" component={UpldModalScreen} 
                    options={
                        {
//                            title: 'Image/Video'
                            headerTitle:() => <Header />
                        }
                    } />
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default StackSiteSurvey;