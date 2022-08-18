import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native'
import ResultList from "../../components/resultList";
import { fn_checkinList } from "../../data/processList";
import { globalStyles } from "../../style/global";

const CheckinList = ()=>{
    const[chkinList, setChkinList] = useState([])

    useEffect(()=>{
        let data = fn_checkinList();
        setChkinList(data)
        console.log(data)
    },[])

    return(
        <View style={globalStyles.container}>
            <ResultList
                type="checkin" 
                items={chkinList}
            />
        </View>
    )
}

export default CheckinList;