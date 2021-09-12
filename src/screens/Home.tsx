import React from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
// import getNameCombinations from 'utils/getNameCombinations'
// import getNameCombinations from '../utils/getNameCombinations'
import getNameCombinations from '@utils/getNameCombinations'
import colors, { accentColors } from '@colors/colors'
import { useTheme } from '@context/ThemeContext'
import CustomButton from '@components/CustomButton'
import Tweet from '@components/Tweet'

const Home = () => {
    let name = 'ab'
    const { theme, setTheme, accentColor, setAccentColor } = useTheme()
    console.log('theme', theme)

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            // alignItems: 'center',
            // justifyContent: 'center',
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
            <Text style={styles.text}>Home</Text>
            <Text style={styles.accent}>{getNameCombinations(name)}</Text>
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
            <Button title='light' onPress={() => setTheme('light')} />
            <Button title='dimmed' onPress={() => setTheme('dimmed')} />
            <Button title='dark' onPress={() => setTheme('dark')} />
            <CustomButton
                style={{ backgroundColor: accentColors.blue }}
                onPress={() => setAccentColor('blue')}
                title='blue'
            />
            <CustomButton
                style={{ backgroundColor: accentColors.green }}
                onPress={() => setAccentColor('green')}
                title='green'
            />
            <CustomButton
                style={{ backgroundColor: accentColors.yellow }}
                onPress={() => setAccentColor('yellow')}
                title='yellow'
            />

            <CustomButton
                style={{ backgroundColor: accentColors.pink }}
                onPress={() => setAccentColor('pink')}
                title='pink'
            />
            <CustomButton
                style={{ backgroundColor: accentColors.purple }}
                onPress={() => setAccentColor('purple')}
                title='purple'
            />
            <CustomButton
                style={{ backgroundColor: accentColors.orange }}
                onPress={() => setAccentColor('orange')}
                title='orange'
            />
        </View>
    )
}

export default Home
