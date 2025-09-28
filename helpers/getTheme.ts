import AsyncStorage from "@react-native-async-storage/async-storage";

export const getTheme = async () => {
  try {
    const value = await AsyncStorage.getItem("theme");
    return value || "system";
  } catch (e) {
    console.log("Error reading theme:", e);
    return "system";
  }
};
