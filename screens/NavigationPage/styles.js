import { Dimensions, StyleSheet } from "react-native";
const { height, width } = Dimensions.get("screen");


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        height: height,
        width: width,
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor:"white"

    },
    MiniContainer: {
        backgroundColor: "#c3ffb9",
        height: height * 0.85,
        width: width * 0.9,
        alignSelf: 'center',
        borderRadius: 25,
        paddingHorizontal: width * 0.1
    },
    Image: {
        height: height * 0.15,
        width: width
    },
    Text: {
        textAlign: "center",
        alignSelf: "center",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: height * 0.08,
        color:"black"
    },
    ButtonContainer:{
        width:width*0.75,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        alignSelf:"center"
    },
    SignInButton: {
        width: width * 0.3,
        height: height * 0.05,
        borderRadius: 8,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#188e5e",
        marginTop: height * 0.1,
        flexDirection:"row"
    },
    SignInButtonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 15
    },
    SignUpButton: {
        width: width * 0.3,
        height: height * 0.05,
        borderRadius: 8,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        marginTop: height * 0.1,
        flexDirection:"row"
    },
    SignUpButtonText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 15
    }
});

export default styles