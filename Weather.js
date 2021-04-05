import React from "react";
import {View,Text,StyleSheet, StatusBar} from "react-native"
import PropsTypes from "prop-types";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";


const weatherOptions={
    Thunderstorm:{
        iconName:"weather-lightning",
        gradient:["#373B44","#4286f4"],
        title:"Thunderstorm in the house",
        subtitle:"Actually, outside of the house"
    },
    Drizzle:{
        iconName:"weather-fog",
        gradient:["#89F7FE","#66A6FF"],
        title:"Drizzle",
        subtitle:"Just don't go outside."
    },
    Rain:{
        iconName:"weather-rainy",
        gradient:["#00C6FB","#005BEA"],
        title:"Rain",
        subtitle:"Singing in the Rain ♪"
    },
    Snow:{
        iconName:"weather-snowy",
        gradient:["#7DE2FC","#B9B6E5"],
        title:"Snow",
        subtitle:"Do you want to build a snowman?"
    },
    Clear:{
        iconName:"weather-sunny",
        gradient:["#FF7300","#FEF253"],
        title:"Sunny",
        subtitle:"Go outside!"
    },
    Clouds:{
        iconName:"weather-cloudy",
        gradient:["#D7D2CC","#304352"],
        title:"Clouds",
        subtitle:"Is a GloomyDay"
    },
    Mist:{
        iconName:"weather-fog",
        gradient:["#4DA0B0","#D39D38"],
        title:"Mist",
        subtitle:"Just don't go outside."
    },
    Haze:{
        iconName:"weather-fog",
        gradient:["#4DA0B0","#D39D38"],
        title:"Haze",
        subtitle:"Just don't go outside."
    },
    Dust:{
        iconName:"weather-fog",
        gradient:["#4DA0B0","#D39D38"],
        title:"Dust",
        subtitle:"Just don't go outside."
    },
    Sand:{
        iconName:"weather-fog",
        gradient:["#4DA0B0","#D39D38"],
        title:"Sand",
        subtitle:"Just don't go outside."
    },
}
export default function Weather({temp,condition}){
    return (
        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container} >
        <StatusBar barStyle="light-content"></StatusBar>
        <View style={styles.halfcontainer}>
        <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName||"weather-sunset"} color="white"></MaterialCommunityIcons>
        <Text style={styles.temp}>{temp}°</Text>
        </View>
        <View style={{...styles.halfcontainer,...styles.textContainer}}>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
        </View>
        </LinearGradient>
        );
}
Weather.PropsTypes={
    temp:PropsTypes.number.isRequired,
    condition:PropsTypes.oneOf(["Thunderstorm","Drizzle","Rain","Snow","Clear","Clouds","Mist","Haze","Dust","Sand"]).isRequired

};

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    temp:{
        fontSize:42,
        color:"white"
    }
    ,
    halfcontainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        color:"white",
        fontSize:44,
        fontWeight:"300",
        marginBottom:10,
        textAlign:"left"
    },
    subtitle:{
        color:"white",
        fontWeight:"600",
        fontSize:30,
        textAlign:"left"
    },
    textContainer:{
        paddingHorizontal:40,
        alignItems:"flex-start",
        justifyContent:"center",
        flex:1
    }
});