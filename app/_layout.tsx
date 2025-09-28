import Nav from "@/components/common/nav/Nav";
import { Stack, Slot } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

// redux
import { Provider } from 'react-redux'
import { store } from "@/redux/store";

export default function RootLayout() {
  return (
    <Provider store={store}>
      
      <View style={styles.container}>
        {/* Common Header */}
        <Nav/>

        {/* Navigation control via Stack */}
        <Stack screenOptions={{ headerShown: false }}>
          <Slot />
        </Stack>

        {/* Common Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2025 My App</Text>
        </View>
      </View>
      
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: { padding: 15, backgroundColor: "#6200EE" },
  headerText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  footer: { padding: 10, backgroundColor: "#eee", alignItems: "center" },
  footerText: { color: "#333" },
});
