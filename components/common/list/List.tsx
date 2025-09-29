import { RootState } from '@/redux/store'
import { View, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'

 

export default function List({icon , btnText , customeStyle  }: any) {

  const {theme} = useSelector((state: RootState) => state.theme)

  return (
    <TouchableOpacity style={{...customeStyle ,padding: 5 , flexDirection: 'row' , alignItems: 'center'  }}  >
      <View style={{width: 35 , }}>{icon && icon}</View> 
      <Text style={{color: theme == 'dark' ? '#ffffff' : '#524e4eff' , fontSize: 16 ,   }} >{btnText}</Text>
    </TouchableOpacity>
  )
}