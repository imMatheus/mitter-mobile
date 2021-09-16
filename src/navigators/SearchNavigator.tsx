import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Search from '@screens/Search'
import { SearchParamList } from '../params/SearchParamList'
import ProfileController from './ProfileController'

const Stack = createStackNavigator<SearchParamList>()

const SearchNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Search' component={Search} />
            {ProfileController(Stack)}
        </Stack.Navigator>
    )
}

export default SearchNavigator
