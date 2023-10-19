import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";


const Details = ({ route }) => {
    const { selectedData } = route.params;


    return (
        <View style={styles.container}>
            <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>Details Screen</Text>
            <View style={{ marginTop: 80, alignContent: 'flex-end' }}>
                <Image source={{ uri: selectedData.flags.png }} style={{ width: 150, height: 150, alignSelf: 'center', }} />
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch', }}>
                    <Icon name="location-dot" color='black' size={20} style={styles.textCountry} />
                    <Text style={styles.textCountry}>{selectedData.name.common}</Text>
                </View>
                <Text style={styles.officialText}>{selectedData.name.official}</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#bab095',
        flex: 1
    },
    officialText: {
        alignSelf: 'center',
        fontWeight: 'bold',
        justifyContent: 'center',
        padding: 30
    },
    textCountry: {
        justifyContent: 'center',
        alignSelf: 'stretch',
        alignContent: 'space-between',
        top: 30,
        // borderWidth:0.5,
        borderRadius: 25,
        padding: 5

    }
})

export default Details;