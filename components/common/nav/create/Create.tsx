import { View, Text } from 'react-native'

// css
import createStyles from './createStyles'


// icons
import Feather from '@expo/vector-icons/Feather';

// redux
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
  


export default function Create() {

  const {theme} = useSelector((state: RootState) => state.theme)


  return (
    <View style={{...createStyles.createBox , backgroundColor: theme == 'dark' ? '#3c475cff' : '#e4e6ebff' }}>
        <Feather name="plus" size={24} color={theme == 'dark' ? '#ffffff' : '#3c475cff'} />
    </View>
  )
}