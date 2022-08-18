import React, { useEffect, useState } from "react";
import {Text, View, FlatList, Switch} from 'react-native'
import ResultList from "../../components/resultList";
import { fn_ohsChecklist } from "../../data/processList";
import { globalStyles } from "../../style/global";

const OHSForm = ({navigation, route})=>{
    
    const[chklist, setChklist] = useState(null)
    const[itm, setItm] = useState(null)
    const [isEnabled, setIsEnabled] = useState(false);
    //const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const itemChkArr = {"checked": false}
    useEffect(()=>{
        const surveyList = fn_ohsChecklist()
        const newList = surveyList.map( obj => {return { ...obj, 'Checked':false }})
       // console.log(newList)
        setChklist(newList)
        setIsEnabled(false)
    }
        ,[])
    
    
    const toggleSwitch = (item)=>{
    
        setItm(item)
    
        const newList = chklist.map( 
            obj => { 
                if(obj.Id == item.Id)
                    {return { ...obj, 'Checked':!item.Checked }}
                return obj
            }    
        )
  
       setChklist(newList)

    }

    const renderItem = ({item})=>{
        return 
    }   
    const UploadContent = (item)=>{

        navigation.navigate("UpldModal",{
            item: itm,
            site: 'Upload'
        })

    }

    return(
        <View style={[globalStyles.container,{paddingVertical:10}]}>
       
            <ResultList items={chklist} type='checklist' onItemClick={null} 
                //isEnabled={isEnabled} 
                toggleSwitch={toggleSwitch}
                UploadContent={UploadContent}
                />
        </View>
    )
}

export default OHSForm;