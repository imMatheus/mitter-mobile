import CustomButton from '@components/CustomButton'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useTheme } from '@context/ThemeContext'
// import {Navigation} from '@react-navigation/native'
import colors, { accentColors } from '@colors/colors'

interface Props {
    navigation: any
}

const Messages = ({ navigation }: Props) => {
    const { setTheme, accentColor, setAccentColor } = useTheme()

    return (
        <View>
            <Button title='light' onPress={() => setTheme('light')} />
            <Button title='dimmed' onPress={() => setTheme('dimmed')} />
            <Button title='dark' onPress={() => setTheme('dark')} />
            <Text style={{ color: accentColors[accentColor], fontWeight: '900', fontSize: 42 }}>
                Accent color
            </Text>
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

export default Messages

const styles = StyleSheet.create({})
