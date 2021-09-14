import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '@screens/Home'
import Profile from '@screens/Profile'

interface Props {}

const Stack = createStackNavigator()

const HomeNavigator = (props: Props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Profile' component={Profile} />
        </Stack.Navigator>
    )
}

export default HomeNavigator
