import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10
    },

    image: {
        width: 75,
        height: 75
    },

    wrapper: {
        justifyContent: 'center',
        marginLeft: 15  
    },

    title: {
        color: 'white',
        fontSize: 18,
        marginBottom: 8
    },
    artist: {
        color: 'lightgrey',
    },
})