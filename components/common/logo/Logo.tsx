import { Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

// redux
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

export default function Logo() {

  const {theme} = useSelector((state: RootState) => state.theme)

  return (
    <Link href="/">
        {theme == 'dark' ? <Image source={require('../../../assets/images/logo-light.webp')} />
         : <Image source={require('../../../assets/images/logo.webp')} />}
    </Link>
  )
}