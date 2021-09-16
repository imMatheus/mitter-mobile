import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Feed from '@screens/Feed'
import { HomeParamList } from '../params/HomeParamList'
import ProfileController from './ProfileController'

const Stack = createStackNavigator<HomeParamList>()

const HomeNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Feed' component={Feed} />
            {ProfileController(Stack)}
        </Stack.Navigator>
    )
}

export default HomeNavigator
