import React, { useEffect, useState } from "react";
import {Text, View, FlatList, Switch} from 'react-native'
import ResultList from "../../components/resultList";
import { fn_siteSurveyList } from "../../data/processList";
import { globalStyles } from "../../style/global";

const SiteSurveyScreen = ({navigation, route})=>{
    const {siteRoute} = route.params
    const[site, setSite] = useState(null)
   console.log(siteRoute.site)
   //console.log(`site name:${siteRoute.Checkedsite.Name}`)
    const[chklist, setChklist] = useState(null)
    const[itm, setItm] = useState(null)
    const [isEnabled, setIsEnabled] = useState(false);
    //const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const itemChkArr = {"checked": false}
    useEffect(()=>{
        const surveyList = fn_siteSurveyList()
        const newList = surveyList.map( obj => {return { ...obj, 'Checked':false }})
       // console.log(newList)
        setChklist(newList)
        setIsEnabled(false)
    }
        ,[])
    
    useEffect(() =>{
        setSite(siteRoute.site)
    }
    ,[route])

    const toggleSwitch = (item)=>{
        //const itmChanged = {...item, "Checked":!}
        setItm(item)
        // //item.Checked = true
       //  console.log(item)
        // const newList = {...chklist, itm};
        // console.log('New Item list')
        // console.log(newList)
        const newList = chklist.map( 
            obj => { 
                if(obj.Id == item.Id)
                    {return { ...obj, 'Checked':!item.Checked }}
                return obj
            }    
        )
        console.log(newList) 
      // const checklist2 = {...chklist, itmChanged}
     //  console.log('New checklist')
      // console.log(itmChanged) 
       setChklist(newList)
//        console.log(chklist)
//        setIsEnabled(prevState => !prevState)
    }

    const renderItem = ({item})=>{
        return 
    }   
    const UploadContent = (item)=>{
       // alert(item.Name)
        navigation.navigate("UpldModal",{
            item: itm,
            site: site
        })
       // alert('done')
    }

    return(
        <View style={[globalStyles.container, {paddingVertical:20}]}>
            {/* <FlatList 
                data={chklist}
                keyExtractor={item => item.Id}
                renderItem={renderItem}
            /> */}
            <ResultList items={chklist} type='checklist' onItemClick={null} 
                //isEnabled={isEnabled} 
                toggleSwitch={toggleSwitch}
                UploadContent={UploadContent}
                />
        </View>
    )
}

export default SiteSurveyScreen;