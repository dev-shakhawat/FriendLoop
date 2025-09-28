import { View, Text, TouchableOpacity } from 'react-native'

 

export default function List({icon , btnText  }: any) {
  return (
    <TouchableOpacity style={{padding: 5 , flexDirection: 'row' , alignItems: 'center'  }}  >
      <View style={{width: 35 }}>{icon && icon}</View> 
      <Text>{btnText}</Text>
    </TouchableOpacity>
  )
}