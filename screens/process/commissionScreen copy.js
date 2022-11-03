import React, { useEffect, useState } from "react";
import {Text, View, FlatList} from 'react-native'
import { globalStyles } from "../../style/global";

const CommissionScreen123 = async ()=>{
    const url = "http://127.0.0.1:8000/"
    const[data, setData] = useState([])    
    // const getJsonDevices = async()=>{
    //     try {
    //         const response = await fetch('https://reactnative.dev/movies.json');
    //         const json = await response.json();
    //        // setData(json.movies);
    //        console.log(json.movies);
    //       } catch (error) {
    //         console.error(error);
    //       } finally {
    //         //setLoading(false);
    //       }
    // }

//     const getMovies = async () => {
//         try {
//          const response = await fetch('https://reactnative.dev/movies.json');
//          const json = await response.json();
//          setData(json.movies);
//        } catch (error) {
//          console.error(error);
//        } finally {
// //         setLoading(false);
//        }
//      }

    useEffect(()=>{
        //  console.log("Use effect log comes here");
        //  getMovies();
    },[])

    return(
        <View style={globalStyles.container}>
            <Text>Commissioning screen</Text>
            
        </View>
    )
}

export default CommissionScreen;