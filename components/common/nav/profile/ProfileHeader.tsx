import { RootState } from '@/redux/store'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'



export default function ProfileHeader( ) {

  const {theme} = useSelector((state: RootState) => state.theme)

  return (
    <TouchableOpacity style={{padding: 10 , flexDirection: 'row' , alignItems: 'center'    , borderRadius: 10 , marginBottom: 10 }} >

      <View style={{flexDirection: 'row' , gap: 10 , alignItems: 'center' }} > 

        {/* profile image */}
        <Image source={{uri: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250'}} style={{width: 40, height: 40 , borderRadius: 50 }} />

        {/* name and username */}
        <View >
          <Text numberOfLines={1} ellipsizeMode="tail" style={{color: theme == 'dark' ? '#ffffff' : '#524e4eff' , fontSize: 16 , fontWeight: '600', maxWidth: 200   }} >Md. Shakhawat Hossain shakhawat</Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={{color: theme == 'dark' ? '#ffffff' : '#524e4eff' ,maxWidth: 200}} >username</Text>
        </View>

      </View>

    </TouchableOpacity>
  )
}