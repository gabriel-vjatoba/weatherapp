import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native";


export default function Header(props){
    return(
        <View style={styles.container}>
            <TouchableOpacity
                onPress={props.onPress}
            >
                <Text style={styles.txtBtn}>{"<"}</Text>
            </TouchableOpacity>
            <Text style={styles.textMain}>
                {props.textMain}
            </Text>
            <Text style={styles.textSub}>
                {props.textSub}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height: '10%',
        flexDirection: 'row',
        alignItems: 'center',
    },

    textMain:{
        fontFamily: 'courier',
        color: '#fff',
        marginRight: 2,
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 80
    },

    textSub:{
        fontFamily: 'courier',
        color: '#fff',
        fontSize: 18
    }
    ,

    txtBtn:{
        color: '#fff',
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    }
})