import React from "react";
import {View, Text, TouchableOpacity} from 'react-native'
import CardTopic from "../../components/card/cardTopic";
import { globalStyles } from "../../style/global";
import { AntDesign } from '@expo/vector-icons';
import CardMenuIcon from "../../components/card/cardMenuicon";

const UpldModalScreen = ({navigation, route}) =>{
    const {item, site} = route.params
    return(
        <View>
            {/* <Text>{item.Id}</Text> */}
            <CardTopic>
                <Text style={{textAlign:'justify'}}>{item.Name}</Text>
            </CardTopic>

            <View style={{flexDirection:"row", marginHorizontal:10, marginVertical:10, justifyContent:"space-around"}}>
                <CardMenuIcon>
                    <AntDesign name="picture" size={28} color="#ad3141" />
                </CardMenuIcon>
                <CardMenuIcon>
                    <AntDesign name="videocamera" size={28} color="#ad3141" />
                </CardMenuIcon>
                <CardMenuIcon>
                    <AntDesign name="folder1" size={28} color="#ad3141" />
                </CardMenuIcon>
                <CardMenuIcon>
                    <AntDesign name="filetext1" size={28} color="#ad3141" />
                </CardMenuIcon>
                
            </View>

            {/* <Text>{site.Name} </Text> */}

        </View>

    )
}

export default UpldModalScreen