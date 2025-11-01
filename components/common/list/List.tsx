import { RootState } from '@/redux/store'
import { Link } from 'expo-router'
import { View, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'



export default function List({icon , iconWidth , btnText , customeStyle ,  href }: any) {

  const {theme} = useSelector((state: RootState) => state.theme)

  return (
    <Link  href={href} style={{...customeStyle ,padding: 5 ,   gap: 5 , borderRadius: 5 }}  >
      
      <View style={{ ...customeStyle, padding: 5, flexDirection: 'row', alignItems: 'center', gap: 5, borderRadius: 5, }} >
      
        {icon && <View style={{ ...iconWidth }}>{icon} </View>}

        <Text style={{ color: theme === 'dark' ? '#ffffff' : '#524e4eff', fontSize: 16, }} >
          {btnText}
        </Text>
<Text style={{ color: theme === 'dark' ? '#ffffff' : '#524e4eff', fontSize: 16, }} >
          {btnText}
        </Text>
      </View>

    </Link>
  )
}