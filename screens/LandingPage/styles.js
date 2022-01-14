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
        height: height * 0.8,
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
        color:"black",
        fontWeight: "800",
        marginBottom: height * 0.08
    },
    Button: {
        width: width * 0.5,
        height: height * 0.05,
        borderRadius: 8,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#188e5e",
        marginTop: height * 0.1,
        flexDirection:"row"
    },
    ButtonText: {
        color: "white",
        fontWeight: "900",
        fontSize: 16
    }
});

export default styles