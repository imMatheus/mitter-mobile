import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Image, Pressable } from 'react-native'
import { useTheme } from '@context/ThemeContext'
import colors from '@colors/colors'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import 'react-native-gesture-handler'
import TabBar from '@components/TabBar'
import Search from '@screens/Search'
import Messages from '@screens/Messages'
import HomeNavigator from './navigators/HomeNavigator'
import { ControllerParamList } from './params/ControllerParamList'

const Tab = createBottomTabNavigator<ControllerParamList>()

const Controller = () => {
    const { theme } = useTheme()

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors[theme].background,
        },
    })

    return (
        <NavigationContainer
            style={styles.container}
            theme={{
                // @ts-ignore
                colors: {
                    text: colors[theme].colorText,
                    background: colors[theme].background,
                },
            }}
            initialRouteName='HomeNavigator'
        >
            <StatusBar style={theme === 'light' ? 'dark' : 'light'} />

            <Tab.Navigator
                tabBar={(props) => {
                    return <TabBar {...props} />
                }}
                screenOptions={{
                    headerLeft: () => (
                        <Pressable
                            style={{
                                marginLeft: 20,
                            }}
                            onPress={() => alert('hej')}
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
                    },
                }}
            >
                <Tab.Screen
                    name='Home'
                    component={HomeNavigator}
                    initialParams={{ iconName: 'home' }}
                />
                <Tab.Screen
                    name='Search'
                    component={Search}
                    initialParams={{ iconName: 'search' }}
                />

                <Tab.Screen
                    name='Messages'
                    component={Messages}
                    initialParams={{ iconName: 'message-square' }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Controller

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
