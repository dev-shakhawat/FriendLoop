import { View, Text , TextInput } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

// css
import searchStyles from './searchStyle'

// redux
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

// icons
import Ionicons from '@expo/vector-icons/Ionicons';
import { useToggleWithOutsideClick } from '@/customeHook/toggle'

export default function Search() {
  
  const {theme} = useSelector((state: RootState) => state.theme)
  const [isBox , setIsBox] = useState(false)
  const boxRef = useRef(null);
  const [isOpen, toggle , setIsOpen, dropdownRef] = useToggleWithOutsideClick(false);
  
  
  

  return (
    <View onFocus={()=> setIsBox(true)} style={{...searchStyles.searchBox , backgroundColor: theme == 'dark' ? '#3c475cff' : '#e4e6ebff' }}>
        <Ionicons style={{marginLeft: 10}} name="search-outline" size={24} color={theme == 'dark' ? '#ffffff' : '#524e4eff'} />
        <TextInput   style={{...searchStyles.searchInput , color: theme == 'dark' ? '#ffffff' : '#524e4eff' }} placeholder='Search friends , videos' />

        {/* search result & history */}
        {isOpen && <View ref={dropdownRef} >
          i am box
        </View>}

    </View>
  )
}