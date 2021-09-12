import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, SafeAreaView, View } from 'react-native'
import Home from '@screens/Home'
import { useTheme } from '@context/ThemeContext'
import Profile from '@screens/Profile'
import colors from '@colors/colors'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabBar from '@components/TabBar'
import Search from '@screens/Search'
import Messages from '@screens/Messages'

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
            <Tab.Navigator
                tabBar={(props) => {
                    return <TabBar {...props} />
                }}
            >
                {/* <SafeAreaView style={styles.container}> */}
                <Tab.Screen name='Home' component={Home} initialParams={{ iconName: 'home' }} />
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
