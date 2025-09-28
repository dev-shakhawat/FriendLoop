import { Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Logo() {
  return (
    <Link href="/">
        <Image source={require('../../../assets/images/logo-light.webp')} />
    </Link>
  )
}