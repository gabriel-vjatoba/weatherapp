import {View, StyleSheet} from 'react-native'


export default function MiniCard(props){
    return(
        <View 
            style = {[styles.container,
            {
                borderTopWidth: props.top,
                borderRightWidth: props.right
            }]}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '50%',
        borderColor: 'white'
    }

})