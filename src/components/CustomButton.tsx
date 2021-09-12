import React from 'react'
import { StyleSheet, Text, View, Pressable, StyleProp, ViewStyle } from 'react-native'
import { useTheme } from '@context/ThemeContext'
import colors from '@colors/colors'

interface Props {
    style?: StyleProp<ViewStyle>
    color?: 'accent' | 'opposite'
    onPress: () => void
    title: string
    size?: 'small' | 'medium' | 'large'
}

const CustomButton = ({ style, title, color = 'accent', onPress }: Props) => {
    const { accentColor, theme } = useTheme()

    const styles = StyleSheet.create({
        wrapper: {
            backgroundColor: colors[theme].backgroundDimmed,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 9999,
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: '600',
        },
        text: {
            color: 'white',
        },
    })

    return (
        <Pressable style={[styles.wrapper, style]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}

export default CustomButton
