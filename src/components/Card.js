import React from "react";
import CardContent from "./CardContent";
import MiniCard from "./MiniCard";
import MiniCardContent from './MiniCardContent'
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons'; 
import { View, StyleSheet, Text } from "react-native";

export default function Card(props){

    return(
        <View style={styles.container}>
            <View style={styles.cardMain}>
                <CardContent
                    main = {props.mainText}
                    temp = {props.temperature}
                    img = {props.img}
                />
            </View>
            <View style={styles.cardFotter}>
                <MiniCard
                    top = {0}
                    right = {1}
                >
                    <MiniCardContent type="WIND" value={props.wind}>
                        <Feather name="wind" size={26} color="white" />
                    </MiniCardContent>
                </MiniCard>
                <MiniCard
                    top = {0}
                    right = {0}
                >
                    <MiniCardContent type="FELLS LIKE" value={props.fellsLike}>
                        <Feather name="thermometer" size={26} color="white" />
                    </MiniCardContent>
                </MiniCard>
                <MiniCard
                    top = {1}
                    right = {1}
                >
                    <MiniCardContent type="HUMIDITY" value={props.um}>
                        <Feather name="cloud-rain" size={26} color="white" />
                    </MiniCardContent>
                </MiniCard>
                <MiniCard
                    top = {1}
                    right = {0}
                >
                    <MiniCardContent type="PRESSURE" value={props.pressure}>
                    <Octicons name="pulse" size={26} color="white" />
                    </MiniCardContent>
                </MiniCard>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height: '60%',
        backgroundColor: '#4A73FC',
        marginHorizontal: 20,
        marginTop: 5,
        borderRadius: 15
    },

    cardMain:{
        height: '70%',
        borderBottomWidth: 1,    
        borderBottomColor: 'white',
        alignItems: 'center', 
    },

    cardFotter:{
        height: '30%',
        flexDirection: 'row',
        flexWrap: 'wrap'
        
    }
})