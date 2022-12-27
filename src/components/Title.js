import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Title(props){
    return(
        <View style={styles.container}>
            <Text style={styles.mainTitle}>{props.cidade}</Text>
            <Text style={styles.subTitle}>{", "+props.pais} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        margin: 20,
        marginTop: 35,
        flexDirection: 'row',
        alignItems: 'baseline'
    },

    mainTitle:{
        fontSize: 25,
        fontWeight: 550,
        fontFamily: 'courier',

        
    },

    subTitle:{
        fontSize: 22,
        color: '#454545',
        fontFamily: 'courier',
        marginTop: 5
    }
})