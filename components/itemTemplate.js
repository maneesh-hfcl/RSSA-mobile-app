import React from "react";
import {View, Text, TouchableOpacity} from 'react-native'
import { globalStyles } from "../style/global";

const ItemTemplate = ({item, onItemClick}) =>{
    return(
        <View style={globalStyles.item_outer_view}>
            <View style={globalStyles.item_inner_view}>
                <Text style={globalStyles.item_left_text}>Site:</Text>
                <Text style={globalStyles.item_right_text}>{item.Name}</Text>
            </View>
            <View style={globalStyles.item_inner_view}>
                <Text style={globalStyles.item_left_text}>Address:</Text>
                <Text style={globalStyles.item_right_text}>{item.Address}</Text>
            </View>
            <View style={globalStyles.item_inner_view}>
                <Text style={globalStyles.item_left_text}>Pincode:</Text>
                <Text style={globalStyles.item_right_text}>{item.Pincode}</Text>
            </View>
            <View style={globalStyles.item_inner_view}>
                <Text style={globalStyles.item_left_text}>Description:</Text>
                <Text style={globalStyles.item_right_text}>{item.Description}</Text>
            </View>
            <View style={globalStyles.item_inner_view}>
                <Text style={globalStyles.item_left_text}></Text>
                <Text style={globalStyles.item_right_text}>
                    <TouchableOpacity style={globalStyles.touchable_btn_go} onPress={() => onItemClick(item)}>
                        <Text style={[globalStyles.text_btn, {fontWeight:"normal"}]}>View</Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </View>
    )
}

export default ItemTemplate;