import { View, Text } from 'react-native'
import { usePathname } from 'expo-router'; 
import React from 'react' 
import {useNavigation} from '@react-navigation/native';

// css
import sideNavStyles from './sidenavStyle'

// components
import List from '../list/List'

// icons
import Feather from '@expo/vector-icons/Feather';

// redux
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import HomeIcon from '@/assets/icons/HomeIcon';
import MessageIcon from '@/assets/icons/MessageIcon';

export default function SideNav() {

    const {theme} = useSelector((state: RootState) => state.theme) 
    const pathname = usePathname(); 
    const navigation = useNavigation();
    
    const navLIst = [
      {btnText: "Home" , href: "/" , icon: <HomeIcon  /> , isActive: pathname.split("/")[1] == "" } ,
      {btnText: "Chat" , href: "/chat" , icon: <MessageIcon  /> , isActive: pathname.split("/")[1] == "chat" } ,
    ]
    
    
    
    
    
    
    
  return (
    <View style={{...sideNavStyles.sideNavBox ,   width: 270 , backgroundColor: theme == 'dark' ? '#1e293b' : '#ffffff' }}>
      {navLIst.map((list) => ( 
        <List 
          key={list.btnText}  
          customeStyle={{backgroundColor : list.isActive == true && theme == 'dark' && '#3e4a5e' }} 
          iconWidth={{width: 25 }} 
          icon={list.icon} btnText={list.btnText} 
          isActive={list.isActive} 
          href={list.href} 
        />
      ))}
    </View>
  )
}