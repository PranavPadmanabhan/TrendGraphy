import { Dimensions, StyleSheet } from "react-native";
const {height,width} = Dimensions.get("screen");

const styles = StyleSheet.create({
  Session:{
      height:height *0.18,
      width:width *0.58,
      borderRadius:15,
      backgroundColor:"grey",
      marginHorizontal:width*0.05
  }
})

export  default styles