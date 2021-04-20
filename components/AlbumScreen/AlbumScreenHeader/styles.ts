import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingBottom: 20
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 40,
        marginBottom: 30,
        alignSelf: 'center'
    },
    name: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 8
    },
    by: {
        color: 'lightgrey',
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 9
    },

    buttonWrapper: {
        alignItems: 'center',
    },

    button: {
        flex: 1,
        backgroundColor: '#1DB954',
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 40,
        alignItems: 'center',
        width: 150,
    },

    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    }
});