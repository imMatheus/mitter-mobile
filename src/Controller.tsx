import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Image, Pressable } from 'react-native'
import Home from '@screens/Home'
import { useTheme } from '@context/ThemeContext'
import Profile from '@screens/Profile'
import colors from '@colors/colors'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import 'react-native-gesture-handler'
//import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabBar from '@components/TabBar'
import Search from '@screens/Search'
import Messages from '@screens/Messages'
import HomeNavigator from './navigators/HomeNavigator'

const Tab = createBottomTabNavigator()

const Controller = () => {
    const { theme } = useTheme()

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors[theme].background,
        },
    })

    return (
        // <View style={styles.container}>
        <NavigationContainer
            style={styles.container}
            theme={{
                colors: {
                    text: colors[theme].colorText,
                    background: colors[theme].background,
                },
            }}
            initialRouteName='Home'
        >
            <StatusBar style={theme === 'light' ? 'dark' : 'light'} />
            {/* <Stack.Navigator>
                </Stack.Navigator> */}
            {/* <Stack.Screen name='User' component={Profile} /> */}

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
                                    width: 34,
                                    height: 34,
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
                {/* <SafeAreaView style={styles.container}> */}
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
                    name='Profile'
                    component={Profile}
                    initialParams={{ iconName: 'user' }}
                />
                <Tab.Screen
                    name='Messages'
                    component={Messages}
                    initialParams={{ iconName: 'message-square' }}
                />
                {/* </SafeAreaView> */}
            </Tab.Navigator>
        </NavigationContainer>
        // </View>
    )
}

export default Controller

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
