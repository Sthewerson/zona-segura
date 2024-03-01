import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    map: {
        width: "100%",
        height: "100%"
    },
    botaoSOS: {
        position: "absolute",
        bottom: 20,
        right: 20,
        backgroundColor: "red",
        borderRadius: 30,
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center"
    },
    textoBotaoSOS: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    }
});
