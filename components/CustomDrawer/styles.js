import { Dimensions, StyleSheet } from "react-native";
const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
    Profile:{
        width:'100%',
        height:height * 0.11,
        elevation:10,
        backgroundColor:"white",
        marginTop:-height * 0.035,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
        paddingLeft:width*0.05,
        marginBottom:height*0.05
    },
    ProfilePic:{
        height:height*0.07,
        width:height*0.07,
        borderRadius:100,
        backgroundColor:"#188e5e",
        borderColor:"#EFEFEF",
        borderWidth:1,
        marginRight:width*0.05
    },
    Name:{
        color:"black",
        fontSize:22,
        fontWeight:"bold"
    },
    Details:{
        color:"black",
        fontSize:15
    },
    LogoutButton:{
        borderRightColor:"#188e5e",
        borderRightWidth:5,
        elevation:2,
        marginVertical:10,
        width:"95%",
        marginTop:height*0.35
        
    },
    LogoutButtonText:{
        fontWeight:"bold",
        fontSize:21,
        color:"rgba(0,0,0,0.8)"
    }
});

export default styles