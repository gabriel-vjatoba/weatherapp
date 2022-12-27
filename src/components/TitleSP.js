import { View, StyleSheet, Text } from "react-native";


export default function TitleSP(props){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                {props.text}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height: '7.5%',
        justifyContent: 'center',
        paddingLeft: 15
    },

    text:{
        color: '#fff',
        fontFamily: 'courier',
        fontSize: 19
    }
})