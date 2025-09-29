import { View, Text } from 'react-native'
import React from 'react'


// redux
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

export default function Devider({customeStyle}: any) {

    const {theme} = useSelector((state: RootState) => state.theme)

  return (
    <View style={{...customeStyle , width: '100%' , height: 1 , backgroundColor: theme == 'dark' ? '#7b7f86ff' : '#d1d3d6ff'}}> 
    </View>
  )
}