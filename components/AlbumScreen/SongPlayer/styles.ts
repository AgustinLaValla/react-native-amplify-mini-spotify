import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainWrapper: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flex: 1
    },

    progress: {
        height: 2,
        backgroundColor: '#fff',
        borderRadius: 2
    },

    container: {
        paddingRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#222',
        flex: 1,
        width: '100%'
    },
    left: {
        display: 'flex',
        flexDirection: 'row'
    },
    image: {
        width: 75,
        height: 75
    },
    songDetailsWrapper: {
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 15,
        width: 150
    },
    artist: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginRight: 5,
        flex: 1
    },
    dot: {
        width: 5,
        height: 5,
        borderRadius: 5,
        backgroundColor: 'lightgrey',
        alignSelf: 'center'
    },
    songTitle: {
        color: 'lightgrey',
        fontSize: 18,
        marginLeft: 5,
        flex: 1
        
    },
    iconsWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
    },

    heart: {
        marginRight: 15,
        alignSelf: 'center'
    }
})