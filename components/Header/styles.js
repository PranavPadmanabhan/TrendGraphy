import { Dimensions, StyleSheet } from "react-native";
const {height,width} = Dimensions.get("screen");


const styles = StyleSheet.create({
    Header:{
        height:height * 0.12,
        width:width,
        backgroundColor:"white",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:height* 0.02,
        elevation:10,
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10
    },
    menu:{
        height:height*0.05,
        width:height*0.05,
        marginTop:15
    },
    notification:{
        height:height*0.03,
        width:height*0.04,
        marginTop:15

    }
})

export default styles