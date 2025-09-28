import { StyleSheet } from "react-native";


const profileStyles = StyleSheet.create({
    profileBox: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d4b9b9ff',
        borderRadius: 50,
        cursor: 'pointer',
    }, 
    profileIconImage: {
        width: 40,
        height: 40, 
        borderRadius: 50,
    },
    dropDownBox: {
        position: 'absolute',
        top: 50,
        right: 0,
        zIndex: 10,
        backgroundColor: '#d4b9b9ff',
        borderRadius: 10,
        padding: 10,
        width: 300,

    }
});

export default profileStyles
