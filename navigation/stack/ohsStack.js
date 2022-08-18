import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TakePictureComp from "../../components/camera/capturePic";
import UpldModalScreen from "../../screens/modals/upldmScreen";
import CheckInForm from "../../screens/ohs/checkInForm";
import OHSForm from "../../screens/ohs/ohsForm";
import { Entypo, Ionicons } from '@expo/vector-icons';
import {View, Text, TouchableOpacity} from 'react-native';
import CheckinList from "../../screens/ohs/checkinList";

const Stack = createNativeStackNavigator()  

const Header = ()=>{
    return(
       <View style={{flexDirection:"row"}}>
            <Text style={{fontSize:16}}>Image/Video</Text>
            <Entypo name="images" size={20} color="black" style={{marginHorizontal:10}} />
        </View>
    )
}

const StackOHSScreen = ()=>{
    return(
        <Stack.Navigator screenOptions={{}} initialRouteName="checkinlist" >
            <Stack.Screen name="checkinlist" component={CheckinList} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen name="checkin" component={CheckInForm} 
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen name="OHSForm" component={OHSForm}
                options={{
                    title:'Fill in the checklist'
                }}
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

export default StackOHSScreen;