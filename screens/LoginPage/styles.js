import { Dimensions, StyleSheet } from "react-native";
const {height , width} = Dimensions.get("screen");

const styles = StyleSheet.create({
    Container:{
        flex:1,
        height:height,
        width:width,
        flexDirection:"column",
        justifyContent:"center",
        backgroundColor:"white"

    },
    MiniContainer:{
        backgroundColor:"#c3ffb9",
        height:height*0.5,
        width:width*0.87,
        alignSelf:'center',
        borderRadius:25,
        paddingHorizontal:width * 0.08
    },
    Image:{
        width:width,
        height:height * 0.15
    },
    firstInput:{
        height:height*0.1,
        marginBottom:height * 0.01
    },
    Input:{
        backgroundColor:"white",
        borderRadius:8,
        marginTop:height * 0.01,
        paddingLeft:15
    },
    secondInput:{
        height:height*0.1,
        marginBottom:height * 0.005
    },
    forgotBtn:{
        marginBottom:height * 0.02,
        fontSize:13,
        fontWeight:"bold",
        color:"black"
    },
    Label:{
        color:"black",
        fontWeight:"bold"
    },
    Button:{
        backgroundColor:"#188e5e",
        width:width*0.3,
        height:height*0.05,
        borderRadius:8,
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"center"
    },
    ButtonText:{
        color:"white",
        fontWeight:"900",
        fontSize:16
    }
});

export default styles