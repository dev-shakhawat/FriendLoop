import { View, Text, Image, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native';

// css
import profileStyles from './profileStyles'

// custome hooks
import { useToggleWithOutsideClick } from '@/customeHook/toggle';

// components
import ProfileHeader from './ProfileHeader';

// icons
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import List from '../../list/List';
import ThemeSwitch from '../../themeSwitch/ThemeSwitch';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Devider from '../../devider/Devider';



export default function Profile() {

    const {theme} = useSelector((state: RootState) => state.theme)
    const [isOpen, toggle , setIsOpen, dropdownRef] = useToggleWithOutsideClick(false);
    const profileOption = [
      {icon : <Entypo name="credit-card" size={24} color={ theme == 'dark' ? '#ffffff' : '#524e4eff' } /> , btnText : 'My Billing' },
      {icon : <Entypo name="modern-mic" size={24} color={theme == 'dark' ? '#ffffff' : '#524e4eff'} /> , btnText : 'Settings' },
      {icon : <Ionicons name="settings-outline" size={24} color={theme == 'dark' ? '#ffffff' : '#524e4eff'} /> , btnText : 'Logout' }
    ]

  return (
    <View  style={profileStyles.profileBox}>

        <TouchableOpacity onPress={toggle}  >
          <Image style={profileStyles.profileIconImage} source={{uri: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250'}}  />
        </TouchableOpacity>
 
        <View style={{...profileStyles.dropDownBox , backgroundColor: theme == 'dark' ? '#3c475cff' : '#e4e6ebff' , transitionDuration: '0.5s', opacity: isOpen ? 1 : 0 ,  transform: [{scale: isOpen ? 1 : .9}] , pointerEvents: isOpen ? 'auto' : 'none',   }} ref={dropdownRef}>

          {/* profile header */}
          <ProfileHeader/>

          {/* devider */}
          <Devider customeStyle={{marginBottom: 10}} />

          {/* profile options */}
          {profileOption.map((list)=>(
            <List key={list.btnText} icon={list.icon} btnText={list.btnText}  />
          ))}

          <ThemeSwitch/>

          {/* devider */}
          <Devider customeStyle={{marginVertical: 10}} />




        </View> 

    </View>
  )
}

