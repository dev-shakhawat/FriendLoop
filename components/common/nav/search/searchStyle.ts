import { StyleSheet } from "react-native";

const searchStyles = StyleSheet.create({
  searchBox: {
    width: "40%",
    position: "relative",
  },
  inputBox: {
    overflow: "hidden",
    borderRadius: 10,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 10,
  },
  searchInput: {
    fontSize: 16,
    width: "100%",
    height: "100%",
    outlineWidth: 0,
    marginLeft: 10
  },
  dropDownBox: {
    position: "absolute", 
    right: "50%",
    transform: "translateX(50%)",
    borderRadius: 10,
    padding: 10,
    width: "102%",
    paddingTop: 60,
    transitionDuration: '0.5s',
    borderWidth: 1
  },
});

export default searchStyles;
