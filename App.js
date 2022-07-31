import React from 'react'
import { View, Image, ScrollView, Dimensions, Text, StyleSheet } from 'react-native'
import Slider from './components/Slider'

const images = [
  'https://images.pexels.com/photos/12320052/pexels-photo-12320052.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
  'https://images.pexels.com/photos/12434670/pexels-photo-12434670.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
  'https://images.pexels.com/photos/3163895/pexels-photo-3163895.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
  'https://images.pexels.com/photos/12361878/pexels-photo-12361878.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
  'https://images.pexels.com/photos/12499889/pexels-photo-12499889.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
]
const App = () =>{
  return(
    <View >
      <Slider images={images} />
    </View>
  )
}

export default App