import { View, StyleSheet, Text} from "react-native";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import TitleSP from "../components/TitleSP";
import InfoSP from "../components/InfoSP";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Geolocation from "@react-native-community/geolocation";

const apiKey = "6cd867ea975cd45d36b4335eecbd7bc6"




export default function SecondPage(){

    const navigation = useNavigation()
    const [load, setLoad] = useState(false)
    const [position, setPosition] = useState({lat: 0, long: 0})
    const [info, setInfo] = useState()
    const [infoD, setInfoD] = useState()
  
    let getPosition = () => {
      Geolocation.getCurrentPosition(
        ({coords}) => {
          setPosition({
            lat: coords.latitude,
            long: coords.longitude
            }
          )
        }, (error) => {console.log(error)},
        { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000} 
      )
    }
  
    let request = (lat, long) => {
      let baseURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}6&lon=${long}&appid=${apiKey}&units=metric`
      axios.get(baseURL).then(response => {
        setInfo(response.data)
        console.log(response.data)
      })
    }

    let requestDays = (lat, long) => {
        let baseURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}6&lon=${long}&appid=${apiKey}&units=metric`
        axios.get(baseURL).then(response => {
        setInfoD(response.data)
        setLoad(true)
        console.log(response.data)
      })
    }
  
  
    useEffect(() => {
      getPosition()
    }, [])
  
    
    useEffect(() => {
      request(position.lat, position.long)
      requestDays(position.lat, position.long)
    }, [position])

    if(!load){
        return(
            <View style={styles.containerLoad}>
            <Text style={styles.textLoad}>Carregando...</Text>
            </View>
        )
    }
    else{
    return(
        <View style={styles.container}>

            <Header
                textMain = {info.name + ", "}
                textSub = {info.sys.country}
                onPress = {() => {navigation.navigate("Home")}}

            />
            <TitleSP
                text="Next 5 days"
            />
            <InfoSP
                source = "circle"
                colorImage = "yellow"
                dayMain = {"Day " + infoD.list[1].dt_txt[8] +  infoD.list[1].dt_txt[9]}
                tempMain = {(infoD.list[1].main.temp_max).toFixed(0) + "º"}
                tempSub = {(infoD.list[1].main.temp_min).toFixed(0) + "º"}
            />
             <InfoSP
                source = "cloud"
                colorImage = "white"
                dayMain = {"Day " + infoD.list[9].dt_txt[8] +  infoD.list[9].dt_txt[9]}
                tempMain = {(infoD.list[2].main.temp_max).toFixed(0) + "º"}
                tempSub = {(infoD.list[2].main.temp_min).toFixed(0) + "º"}
            />
             <InfoSP
                source = "cloud"
                colorImage = "white"
                dayMain = {"Day " + infoD.list[17].dt_txt[8] +  infoD.list[17].dt_txt[9]}
                tempMain = {(infoD.list[3].main.temp_max).toFixed(0) + "º"}
                tempSub = {(infoD.list[3].main.temp_min).toFixed(0) + "º"}
            />
             <InfoSP
                source = "circle"
                colorImage = "yellow"
                dayMain = {"Day " + infoD.list[25].dt_txt[8] +  infoD.list[25].dt_txt[9]}
                tempMain = {(infoD.list[4].main.temp_max).toFixed(0) + "º"}
                tempSub = {(infoD.list[4].main.temp_min).toFixed(0) + "º"}
            />
             <InfoSP
                source = "cloud"
                colorImage = "white"
                dayMain = {"Day " + infoD.list[33].dt_txt[8] +  infoD.list[33].dt_txt[9]}
                tempMain = {(infoD.list[5].main.temp_max).toFixed(0) + "º"}
                tempSub = {(infoD.list[5].main.temp_min).toFixed(0) + "º"}
            />
        </View>
    );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#4A73FC',
        height: '100%'
    },

    containerLoad:{
        textAlign: 'center',
        alignItems: 'center',
    },
    
    textLoad:{
        fontSize: 45,
        fontFamily: 'courier',
        fontWeight: 'bold'
    }
})