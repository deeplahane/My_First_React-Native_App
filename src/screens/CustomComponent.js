import React from 'react';
import {Text,StyleSheet} from 'react-native';

const CustomComponent = ()=>{
    return <Text style={styles.textStyle}> hello World! this is my custom component</Text>;
};

const styles = StyleSheet.create({
    textStyle:{
        color: "green",
    },
});

export default CustomComponent ;