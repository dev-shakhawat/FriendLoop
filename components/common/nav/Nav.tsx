import { View, Text } from 'react-native'

// css
import navStyles from './navStyles'

// components
import Logo from '../logo/Logo';
import Search from './search/Search';
import Create from './create/Create';
import Notification from './notification/Notification';
import Profile from './profile/Profile';

// redux
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
 

export default function Nav() {
  
  const {theme} = useSelector((state: RootState) => state.theme)
 
 
  return (
    <View style={{...navStyles.navBox , backgroundColor:  theme == 'dark' ? '#1e293b' : '#ffffff'  }}>
      
      {/* logo */}
      <Logo/>

      {/* search */}
      <Search/>

      {/* nav options */}
      <View style={{flexDirection: 'row' , gap: 15 }}>

        {/* create something */}
        <Create/>

        {/* all notifications */}
        <Notification/>

        {/* profile for nav */}
        <Profile/>

      </View>
    </View>
  )
}