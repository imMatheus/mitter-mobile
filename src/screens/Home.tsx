import React from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import getNameCombinations from '@utils/getNameCombinations'
import colors, { accentColors } from '@colors/colors'
import { useTheme } from '@context/ThemeContext'
import Tweet from '@components/Tweet'

const Home = () => {
    const { theme, accentColor } = useTheme()

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        text: {
            color: colors[theme].colorText,
        },
        accent: {
            color: accentColors[accentColor],
        },
        scrollView: {
            // backgroundColor: 'red',
        },
    })
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
            </ScrollView>
        </View>
    )
}

export default Home
