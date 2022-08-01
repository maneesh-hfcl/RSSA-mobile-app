import React, { useEffect, useState } from "react";
import {Text, View, FlatList, Switch} from 'react-native'
import ResultList from "../../components/resultList";
import { fn_siteSurveyList } from "../../data/processList";
import { globalStyles } from "../../style/global";

const SiteSurveyScreen = ()=>{
    const[chklist, setChklist] = useState(null)
    const [isEnabled, setIsEnabled] = useState(false);
    //const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
    useEffect(()=>{
        setChklist(fn_siteSurveyList())
        setIsEnabled(false)
    }
        ,[])
    
    const toggleSwitch = (item)=>{
        console.log(item)
        setIsEnabled(prevState => !prevState)
    }

    const renderItem = ({item})=>{
        return 
    }   

    return(
        <View style={globalStyles.container}>
            {/* <FlatList 
                data={chklist}
                keyExtractor={item => item.Id}
                renderItem={renderItem}
            /> */}
            <ResultList items={chklist} type='checklist' onItemClick={null} 
                isEnabled={isEnabled} 
                toggleSwitch={toggleSwitch}
                />
        </View>
    )
}

export default SiteSurveyScreen;