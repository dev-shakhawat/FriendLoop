import { StyleSheet } from "react-native";

const navStyles = StyleSheet.create({
  navBox: {
    flexDirection: 'row', 
    padding: 15, 
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
    
  }, 
});

export default navStyles