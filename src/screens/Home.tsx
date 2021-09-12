import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
// import getNameCombinations from 'utils/getNameCombinations'
// import getNameCombinations from '../utils/getNameCombinations'
import getNameCombinations from '@utils/getNameCombinations'
import colors from '@colors/colors'
import { useTheme } from '@context/ThemeContext'

const Home = () => {
    let name = 'ab'
    const { theme, setTheme } = useTheme()
    console.log('theme', theme)

    const styles = StyleSheet.create({
        container: {
            // backgroundColor: colorPalette.background,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: colors[theme].background,
        },
        text: {
            color: colors[theme].colorText,
        },
    })
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
            <Text>{getNameCombinations(name)}</Text>
            <Button title='light' onPress={() => setTheme('light')} />
            <Button title='dimmed' onPress={() => setTheme('dimmed')} />
            <Button title='dark' onPress={() => setTheme('dark')} />
        </View>
    )
}

export default Home
