import React from "react";
import {View} from "react-native";
import Images from "../screens/Images"

const CardDetails = ()=>{
    return(
        <View>
            <Images message="this is first image" imgSrc={require('../../assets/img2.jpeg')} />
            <Images message="this is second image" imgSrc={require('../../assets/img2.jpeg')} />
            <Images message="this is third image" imgSrc={require('../../assets/img2.jpeg')} />
            <Images message="this is forth image" imgSrc={require('../../assets/img2.jpeg')} />
            <Images message="this is fifth image" imgSrc={require('../../assets/img2.jpeg')} />
        </View>
    )
}

export default CardDetails;