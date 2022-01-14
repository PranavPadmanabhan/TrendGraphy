import { Dimensions, StyleSheet } from "react-native";
const {height,width} = Dimensions.get("screen");

const styles = StyleSheet.create({
    Container:{
        height:height,
        width:width,
        backgroundColor:"rgba(250,250,250,0.8)",
        
    },
    banner:{
        width:width*0.92,
        height:height * 0.22,
        alignSelf:"center",
        marginTop:height * 0.02,
        borderRadius:25,
        padding:height * 0.02,
        alignItems:"flex-start",
        justifyContent:"flex-end"
    },
    bannerText:{
        color:"white",
        fontSize:21,
        fontWeight:"bold"
    },
    heading:{
        
        width:width*0.4,
        height:height * 0.045,
        backgroundColor:'#188e5e',
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center",
        marginLeft:height * 0.02,
        marginTop:height * 0.04,
        borderRadius:8,
        marginBottom:height*0.02

    },
    headingText:{
        color:"white",
        fontWeight:"bold",
        fontSize:14,
    },
    ScrollView:{
    },
    Content:{
        height:height * 0.89,
        width:width,
        
    }

});

export default styles