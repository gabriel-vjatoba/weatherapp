import { ScrollView, StyleSheet, Text} from "react-native";
import FotterCard from "./FotterCard";

export default function FotterMain(props){
    return(
        <ScrollView style={styles.container} horizontal={true}>
            <FotterCard
                img = "cloud"
                click = {false}
                time = "18:00"
                temp = {props.temp1}
            />
            <FotterCard
                img = "cloud"
                click = {true}
                time = "21:00"
                temp = {props.temp2}
            />
            <FotterCard
                img = "cloud"
                click = {false}
                time = "00:00"
                temp = {props.temp3}
            />
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        height: '100%',
        marginTop: 20
    }
})