import React, { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import SiteSurveyScreen from "../screens/process/siteSurveyScreen";
import SiteBuildScreen from "../screens/process/siteBuildScreen";
import MaterialSiteScreen from "../screens/process/materialScreen";
import CommissionScreen from "../screens/process/commissionScreen";
import DriveTestScreen from "../screens/process/driveTestScreen";
import AcceptanceScreen from "../screens/process/acceptanceScreen";
import CustHandoverScreen from "../screens/process/custHandoverScreen";
import StackSiteSurvey from "../navigation/stack/siteSurveyStack";
import { Switch } from "react-native-web";

const ProcessBaseComponent = ({route}, props)=>{
    const[processIdVal, setProcessId] = useState(1)
   const {processId, site} = route.params;
    const[siteId, setSiteId] = useState(null);
    

    
   useEffect(() => {
         console.log("new processid: " + processId)
    }
    ,[])

    switch(processId){
        case 1: 
            return <StackSiteSurvey siteRoute={site} />
            break;
        case 2:
            return <MaterialSiteScreen />
            break;
        case 3:
            return <SiteBuildScreen />
            break
        case 4:
            return <CommissionScreen />
            break
        case 5:
            return <DriveTestScreen />
            break
        case 6:
            return <AcceptanceScreen />
            break
        case 7:
            return <CustHandoverScreen />
            break
    }
    

    
    

}

export default ProcessBaseComponent;