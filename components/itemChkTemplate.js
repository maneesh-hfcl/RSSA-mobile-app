import React from "react";
import {View, Text, Switch} from 'react-native'

const ItemChklistTemplate = ({item, isEnabled, toggleSwitch})=>{
    return(
        <View style={{marginHorizontal:10, marginVertical:10, 
            borderColor:'#bcd1e3', borderWidth:1, borderRadius:5,
            backgroundColor:'#e9f0f7',
            paddingVertical:5,
            paddingHorizontal:5,
            flexDirection:'row'
            }}>
                <Text style={{flex:1}}>{item.Name}</Text>
                <Switch style={{alignSelf:"flex-start"}}
                    value={isEnabled}
                    onValueChange={() => toggleSwitch(item)}
                />
        </View>
    )
}

export default ItemChklistTemplate;