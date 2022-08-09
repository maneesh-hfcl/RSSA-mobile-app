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

const ProcessBaseComponent = ({route}, props)=>{
//     const[scrnId, setScrnId] = useState(0)
    const[siteId, setSiteId] = useState(null)
     const {processId, site} = route.params;
    // console.log(site.Name)
 //   console.log("Process id base comp " + site.Name)
//     const routeName = getFocusedRouteNameFromRoute(route);
//    // console.log(routeName)
//    useEffect(() => {
//         if(scrnId == 0)
//             setScrnId(1)
//         console.log("first time load: "+ scrnId)
//     }
//     ,[])
   useEffect(() => {
      //  const {processId} = route.params;
        
      //  setSiteId(processId)
    }
    ,[route])

    switch(processId){
        case 1:
            return <StackSiteSurvey siteRoute={route.params} {...props} />
            break;
        case 2: 
            return <SiteBuildScreen />
            break;
        case 3:
            return <MaterialSiteScreen />
            break;
        case 4: 
            return <CommissionScreen />
            break;
        case 5:
            return <DriveTestScreen />
            break;
        case 6: 
            return <AcceptanceScreen />
            break;
        case 7:
            return <CustHandoverScreen />
            break;
            
   }
}

export default ProcessBaseComponent;