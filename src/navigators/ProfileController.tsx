import React from 'react'
import { TypedNavigator } from '@react-navigation/native'
import { HomeParamList } from '../params/HomeParamList'
import { SearchParamList } from '../params/SearchParamList'
import Profile from '@screens/Profile'

const ProfileController = (
    Stack: TypedNavigator<any, any, any, any, any>
    // Stack: TypedNavigator<HomeParamList | SearchParamList, any, any, any, any>
) => {
    return (
        <>
            <Stack.Screen name='Profile' component={Profile} />
        </>
    )
}

export default ProfileController
