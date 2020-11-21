import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen =() =>{
    return (
    <View style={styles.parentStyle}>
        <View style={styles.viewOneStyle}  />
        <View style={styles.viewTwoStyle}  />
        <View style={styles.viewThreeStyle}  />
    </View>
    );
}


const styles = StyleSheet.create({
    parentStyle:{
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        alignItems: 'flex-start'
    },

    viewOneStyle:{
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },
    viewTwoStyle:{
        height: 50,
        width: 50,
        backgroundColor: 'purple',
        //...StyleSheet.absoluteFillObject
        position: 'absolute',
        alignSelf: 'flex-end'

    },
    viewThreeStyle:{
        height: 50,
        width: 50,
        backgroundColor: 'green',
        alignSelf: 'center'
    }
});

export default BoxScreen;