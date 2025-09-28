import { StyleSheet } from "react-native";

const searchStyles = StyleSheet.create({
  searchBox: {
    flexDirection: 'row',  
    backgroundColor: '#d4b9b9ff',
    borderRadius: 10,
    width: '40%', 
    position: 'relative',
  }, 
  searchInput: {
    paddingTop: 10, 
    paddingLeft: 30,
    paddingBottom: 10,
    fontSize: 16, 
    width: '100%',
    outlineWidth: 0
  },
});

export default searchStyles