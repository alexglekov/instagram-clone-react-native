import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Divider } from 'react-native-elements/dist/divider/Divider'

export const bottomTabIcons = [
    {
        name: 'Home',
        active:
        '',
        inactive:
        '',
    },
    {
        name:'Search',
        active:
        '',
        inactive:
        '',
    },
    {
        name: 'Reels',
        active:
        '',
        inactive:
        '',
    },
    {
        name: 'Shop',
        active:
        '',
        inactive:
        '',
    },
    {
        name: 'Profile',
        active:
        '',
        inactive:
        '',
    }
]

const BottomTabs = ({icons}) => {
    const [activeTab, setActiveTab] = useState('Home')

    const Icon = ({icon}) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
        <Image source={{uri: icon.inactive}} style={styles.icon} />
        </TouchableOpacity>
    )
  return (
    <View style={styles.container}>
      {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent: 'space-around',
        height:50,
        paddingTop:10,
    },

    icon:{
        width:30,
        height:30,
    }
})

export default BottomTabs