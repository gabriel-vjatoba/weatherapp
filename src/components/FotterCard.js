import { View, StyleSheet, Text, TouchableOpacity} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 
import React, { useState } from "react";

/*
    cloud
    sun
    cloud-sun
    cloud-moon
    cloudversify
    cloud-showers-heavy
*/

export default function FotterCard(props){

    const [click, setClick] = useState(false)

    return(
        <View style={[styles.container,
        {
            backgroundColor: click ? "#4A73FC" : "#fff"
        }]}>
            
            <Text style={{
                color: click ? "#FFF" : "#000",
                fontFamily: 'courier',
                marginTop: 7,
                fontWeight: 'bold'
            }}>
                {props.time}
            </Text>

            <TouchableOpacity
                onPress={() => {setClick(!click)}}
            >
            <FontAwesome5 name={click ? "cloud-moon" : "cloud"} size={24} color={click ? "#FFF" : "#4A73FC"} />
            </TouchableOpacity>

            <Text style={{
                color: click ? "#FFF" : "#000",
                fontWeight: 'bold',
                marginBottom: 7,
                fontFamily: 'courier'
            }}>
                {props.temp}
            </Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        height: '150%',
        width: '30%',
        marginLeft: 5,
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})