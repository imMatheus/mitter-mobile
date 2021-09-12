import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Home from '@screens/Home'
import { useTheme } from '@context/ThemeContext'
import colors from '@colors/colors'
const Controller = () => {
    const { theme } = useTheme()
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors[theme].background,
        },
    })

    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            <Home />
        </View>
    )
}

export default Controller

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
