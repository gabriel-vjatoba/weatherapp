import { View, StyleSheet, Text, TouchableOpacity} from "react-native";

export default function FotterTop(props){
    return(
        <View style={styles.container}>
            <Text style={styles.textMain}>
                {props.day}
            </Text>
            <View>
                <Text style={styles.text}>
                    {props.next}
                    <TouchableOpacity
                        style={{
                            color: '#505050',
                            fontWeight: 'bold',
                            fontSize: 18,
                            marginLeft: 12
                        }}

                        onPress = {props.nav}
                    >
                        <Text>{'>'}</Text>
                    </TouchableOpacity>

                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between'

    },

    subContainer:{
        flexDirection: 'row'
    },

    textMain:{
        fontWeight: 'bold',
        fontFamily: 'courier',
        fontSize: 18
    },

    text:{
        fontWeight: 550,
        fontFamily: 'courier',
        fontSize: 18,
        color: '#808080'
    }
})