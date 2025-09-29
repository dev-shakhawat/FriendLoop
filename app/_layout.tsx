import Nav from "@/components/common/nav/Nav";
import { Stack, Slot } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

// redux
import { Provider } from 'react-redux'
import { store } from "@/redux/store";

// components
import SideNav from "@/components/common/sideNav/SideNav";

export default function RootLayout() {
 

  return (
    <Provider store={store}>
      
      <View style={{flex: 1  }}  >
        {/* Common Header */}
        <Nav/>


        {/* side nav and Stack */}
        <View style={{flex: 1 , flexDirection: 'row' , }}>

          {/* side nav */}
          <SideNav/>

          {/* Navigation control via Stack */}
          <Stack screenOptions={{ headerShown: false }}>
            <Slot />
          </Stack>

        </View>
 
      </View>
      
    </Provider>
  );
}

 