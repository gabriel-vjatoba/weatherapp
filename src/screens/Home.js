import React from "react";
import { useEffect, useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import Title from "../components/Title";
import Card from "../components/Card";
import Fotter from "../components/Fotter";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Geolocation from "@react-native-community/geolocation";

const apiKey = "6cd867ea975cd45d36b4335eecbd7bc6"




export default function HomePage(){
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
            <Title
                cidade = {info.name}
                pais = {info.sys.country}
            />
            <Card
                //MainCard
                mainText = {info.weather[0].description}
                temperature = {(info.main.temp).toFixed(0)}
                img = "weather-partly-cloudy"
                //FotterCard
                wind = {info.wind.speed + " Km/j"} //km/j
                pressure = {info.main.pressure + " mbar"}
                um = {info.main.humidity + "%"}
                fellsLike = {info.main.feels_like}
            />
            <Fotter
                nav = {() => navigation.navigate("SecondPage")}
                temp1 = {(infoD.list[0].main.temp).toFixed(0) + "º"}
                temp2 = {(infoD.list[1].main.temp).toFixed(0) + "º"}
                temp3 = {(infoD.list[2].main.temp).toFixed(0) + "º"}
            />
        </View>
    );  
    }
}

const styles = StyleSheet.create({
    container:{
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