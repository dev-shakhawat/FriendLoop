import { themeSet } from "@/redux/allSlices/theme/themeSlice";
import { RootState } from "@/redux/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, useColorScheme, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

type ThemeType = "light" | "dark" | "system";

export default function ThemeSwitch() {
  const systemScheme = useColorScheme();
  const [currentTheme, setCurrentTheme] = useState<ThemeType>("system"); 
  const dispatch = useDispatch();
  const {theme} = useSelector((state: RootState) => state.theme)

  // Load saved theme on app start
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem("theme");
        if (savedTheme) {
          setCurrentTheme(savedTheme as ThemeType);
          dispatch(themeSet(savedTheme as ThemeType));
        }
      } catch (e) {
        console.log("Error loading theme:", e);
      } finally { 

      }
    };
    loadTheme();
  }, []);

  // Save theme whenever it changes
  useEffect(() => { 
    const saveTheme = async () => {
      try {
        await AsyncStorage.setItem( "theme", currentTheme === "system" ? systemScheme ?? "light" : currentTheme ); 
      } catch (e) {
        console.log("Error saving theme:", e);
      }
    };
    saveTheme();
  }, [currentTheme, systemScheme]);
 

  const handleSwitchTheme = (theme: ThemeType) => {
    setCurrentTheme(theme);
    dispatch(themeSet(theme == 'system' ? systemScheme ?? 'light' : theme));
  };

  return (
    <View
      style={{
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      {/* Light Theme */}
      <TouchableOpacity onPress={() => handleSwitchTheme("light")}>
        <Text style={{ color: theme == 'dark' ? '#ffffff' : '#524e4eff' }}>Light</Text>
      </TouchableOpacity>

      {/* Dark Theme */}
      <TouchableOpacity onPress={() => handleSwitchTheme("dark")}>
        <Text style={{ color: theme == 'dark' ? '#ffffff' : '#524e4eff' }}>Dark</Text>
      </TouchableOpacity>

      {/* System Theme */}
      <TouchableOpacity onPress={() => handleSwitchTheme("system")}>
        <Text style={{ color: theme == 'dark' ? '#ffffff' : '#524e4eff' }}>System</Text>
      </TouchableOpacity>
    </View>
  );
}
