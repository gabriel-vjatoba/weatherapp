import { View, StyleSheet} from "react-native";
import FotterTop from "./FotterTop";
import FotterMain from "./FotterMain";

export default function Fotter(props){
    return(
        <View style={styles.container}>
            <FotterTop
                day="Today"
                next="Next 5 Days"
                nav = {props.nav}
            />
            <FotterMain
                temp1 = {props.temp1}
                temp2 = {props.temp2}
                temp3 = {props.temp3}
            />
        </View>
    );  
}

const styles = StyleSheet.create({
    container:{
        marginTop: 40,
        marginHorizontal: 20,
        height: '22%'
    }
})