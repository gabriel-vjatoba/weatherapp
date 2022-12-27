import React from "react";
import { View, StyleSheet, Text} from "react-native";

/*
    Names: wind, sun, thermometer, heartbeat-alt
*/

export default function MiniCardContent(props){
    return(
        <View style={styles.container}>

            <View style={styles.imgBox}>
                {props.children}
            </View>

            <View style={styles.textBox}>
                <Text style={styles.textType}>
                    {props.type}
                </Text>
                <Text style={styles.textValue}>
                    {props.value}
                </Text>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginHorizontal: 'auto',
        height: '100%'
    },

    textBox:{
        marginTop: 10,
        flexDirection: 'column'
    },

    imgBox:{
        marginRight: 20,
        marginVertical: 'auto'
    },
    
    textType: {
        color: '#A1ADCE',
        fontFamily: 'courier',
        fontWeight: 'bold',
        marginTop: 5
    },

    textValue: {
        color: 'white',
        fontFamily: 'courier',
        marginTop: 5
    }
})