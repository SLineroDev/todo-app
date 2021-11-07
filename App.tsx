import React from 'react'
import { StatusBar } from 'react-native'
import Card from './components/Card'

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#E5E5E5" barStyle={'dark-content'} />
      <Card />
    </>
  )
}
