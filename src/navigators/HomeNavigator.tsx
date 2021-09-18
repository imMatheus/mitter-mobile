import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Feed from '@screens/Feed'
import { HomeParamList, HomeStackNavProps } from '../params/HomeParamList'
import ProfileController from './ProfileController'
import { Image, Pressable } from 'react-native'

const Stack = createStackNavigator<HomeParamList>()

const HomeNavigator = ({ navigation }: HomeStackNavProps<'Feed'>) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerRight: () => (
                    <Pressable
                        style={{
                            marginRight: 20,
                        }}
                        onPress={() => {
                            // navigation.navigate('Home', {
                            //     screen: 'Profile',
                            //     params: {
                            //         id: 'BqCvsg8nEUgrKwyf0xqFjhJFsW52',
                            //     },
                            // })
                            navigation.navigate('Profile', {
                                id: 'BqCvsg8nEUgrKwyf0xqFjhJFsW52',
                            })
                        }}
                    >
                        <Image
                            style={{
                                width: 35,
                                height: 35,
                                backgroundColor: '#3066d1',
                                borderRadius: 9999,
                            }}
                            source={{
                                uri: 'https://cdn.fakercloud.com/avatars/justinrhee_128.jpg',
                            }}
                        />
                    </Pressable>
                ),
                headerStyle: {
                    height: 100,
                    backgroundColor: 'red',
                },
            }}
        >
            <Stack.Screen name='Feed' component={Feed} />
            {ProfileController(Stack)}
        </Stack.Navigator>
    )
}

export default HomeNavigator
