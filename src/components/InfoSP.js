import { View, StyleSheet, Text } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 


export default function InfoSP(props){
    return(
        <View style={styles.container}>
            <FontAwesome name={props.source} size={24} color={props.colorImage} style={styles.iconImg}/>
            <View style={styles.boxDay}>
                <Text style={styles.textMain}>{props.dayMain}</Text>
            </View>
            
            <View style={styles.boxTemp}>
                <Text style={styles.textMain}>{props.tempMain}</Text>
                <Text style={styles.textSub}>{props.tempSub}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height: '7.5%',
        alignItems: 'center',
        marginTop: 10,
        flexDirection: 'row'
    },

    boxDay:{
        marginLeft: 30,
        flexDirection: 'row',
        fontSize: 16
    },

    boxTemp:{
        marginLeft: 100,
        flexDirection: "row",
        color: '#A1ADCE',
        fontSize: 16
    },

    textMain:{
        color: '#fff',
        fontFamily: 'courier',
        fontSize: 18
    },

    textSub:{
        color: '#fff',
        fontFamily: 'courier',
        color: '#A1ADCE',
        fontSize: 16    },

    iconImg:{
        marginLeft: 10
    }
})