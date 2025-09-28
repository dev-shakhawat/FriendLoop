import { View, Text } from 'react-native'

// css
import notiStyles from './notiStyles'

// icon
import Ionicons from '@expo/vector-icons/Ionicons';

// redux
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';



export default function Notification() {

  const {theme} = useSelector((state: RootState) => state.theme)

  return (
    <View style={{...notiStyles.notiBox ,  backgroundColor: theme == 'dark' ? '#2a3345' : '#aaa5a5ff'  }}>
        <Ionicons name="notifications-outline" size={24} color={theme == 'dark' ? '#ffffff' : '#aaa5a5ff'}  />
    </View>
  )
}