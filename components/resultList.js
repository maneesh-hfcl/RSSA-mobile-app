import React, { useEffect, useState } from "react";
import {View, Text, FlatList} from 'react-native'
import ItemTemplate from "./itemTemplate";

const ResultList = ({items, onItemClick})=>{
    
    const renderItem = ({item})=>{
        return(<ItemTemplate item={item} onItemClick={onItemClick} />)
    }

    return(
        <FlatList 
            data={items}
            keyExtractor ={item => item.Id}
            renderItem={renderItem}
        />

    )
}

export default ResultList;