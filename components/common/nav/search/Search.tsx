import { View, Text , TextInput } from 'react-native'
import React from 'react'

// css
import searchStyles from './searchStyle'

// redux
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

export default function Search() {
  
  const {theme} = useSelector((state: RootState) => state.theme)

  return (
    <View style={{...searchStyles.searchBox , backgroundColor: theme == 'dark' ? '#2a3345' : '#ffffff' }}>
        <TextInput   style={{...searchStyles.searchInput , color: theme == 'dark' ? '#ffffff' : '#000000' }} placeholder='Search' />
    </View>
  )
}