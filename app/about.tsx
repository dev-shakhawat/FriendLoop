import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions } from 'react-native'; 
import { Link } from "expo-router"; 

export default function About() {
  const { width, height } = Dimensions.get('window');
  console.log(width, height);
  
  return (
    <SafeAreaView> 
      <Link href="/">home</Link>
 
    </SafeAreaView>
  );
}
