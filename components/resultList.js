import React, { useEffect, useState } from "react";
import {View, Text, FlatList} from 'react-native'
import ItemCheckinTemplate from "./itemCheckin";
import ItemChklistTemplate from "./itemChkTemplate";
import ItemTemplate from "./itemTemplate";

const ResultList = ({items, onItemClick, type, isEnabled,toggleSwitch, UploadContent})=>{
    
    const renderItem = ({item})=>{
        if(type == "checklist")
            return <ItemChklistTemplate item={item} 
                    isEnabled={isEnabled} toggleSwitch={toggleSwitch} UploadContent={UploadContent}  />
        else if(type=="checkin")
            return <ItemCheckinTemplate item={item} />        
        return(<ItemTemplate item={item} onItemClick={onItemClick} />)
    }

    return(
        <FlatList style={{}}
            data={items}
            keyExtractor ={item => item.Id}
            renderItem={renderItem}
        />

    )
}

export default ResultList;