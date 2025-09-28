import { View, Text, Image, TouchableOpacity } from 'react-native'



export default function ProfileHeader( ) {
  return (
    <TouchableOpacity style={{padding: 10 , flexDirection: 'row' , alignItems: 'center' , backgroundColor: '#f1f1f1' , borderRadius: 10 , marginBottom: 10 }} >

      <View style={{flexDirection: 'row' , gap: 10 , alignItems: 'center' }} > 

        {/* profile image */}
        <Image source={{uri: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250'}} style={{width: 40, height: 40 , borderRadius: 50 }} />

        {/* name and username */}
        <View>
          <Text>Md. Shakhawat Hossain</Text>
          <Text>username</Text>
        </View>

      </View>

    </TouchableOpacity>
  )
}