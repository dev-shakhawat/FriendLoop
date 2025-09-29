import { View, Text } from 'react-native'
import React from 'react'

// css
import sideNavStyles from './sidenavStyle'

// components
import List from '../list/List'

// icons
import Feather from '@expo/vector-icons/Feather';

// redux
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export default function SideNav() {

    const {theme} = useSelector((state: RootState) => state.theme)

  return (
    <View style={{backgroundColor: theme == 'dark' ? '#0f172a' : '#ffffff', width: 270 }}>
        <List customeStyle={sideNavStyles.list} icon={<Feather name="home" size={20} color={theme == 'dark' ? '#ffffff' : '#524e4eff'} />} btnText={"Home"} />
    </View>
  )
}