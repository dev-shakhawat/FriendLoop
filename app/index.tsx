import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions } from 'react-native'; 
import { Link } from "expo-router"; 

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function Index() {
  const { width, height } = Dimensions.get('window'); 
  const {theme} = useSelector((state: RootState) => state.theme)
  
  return (
    <SafeAreaView style={{flex: 1 , backgroundColor: theme == 'dark' ? '#0f172a' : '#F7F7F7'  }} > 
      <Link href="/about">about</Link>
 
    </SafeAreaView>
  );
}
