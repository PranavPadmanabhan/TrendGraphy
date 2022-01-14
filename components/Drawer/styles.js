import { Dimensions, StyleSheet } from "react-native";
const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
    Drawer: {
        height: height,
        width: width * 0.75,
        position: "absolute",
        zIndex: 1000,
        elevation: 10,
        left: 0,
        top: 0,
        backgroundColor: "#EFEFEF",
    },
    profile: {
        width: "100%",
        height: height * 0.12,
        backgroundColor: "white",
        paddingLeft: width * 0.04,
        marginBottom: height * 0.04,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        elevation: 10,
        
    },
    profileImage: {
        height: height * 0.06,
        width: height * 0.06,
        borderRadius: 100,
        backgroundColor: "#188e5e",
        marginRight: width * 0.05
    },
    Name: {
        color: "black",
        fontSize: 18,
        fontWeight: "900"
    },
    details: {
        color: "black",
        fontSize: 14
    },
    Option: {
        width: "100%",
        height: height * 0.075,
        backgroundColor: "white",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingLeft: width * 0.04,
        shadowColor:"grey",
        elevation:1,
       borderRightColor:"#188e5e",
       borderRightWidth:5,
       marginBottom:height*0.01
    },
    optionText:{
        color:"black",
        fontSize:20,
        fontWeight:"600"
    }
});

export default styles