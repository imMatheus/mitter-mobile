import React from 'react'
import { StyleSheet, Pressable } from 'react-native'
import { Feather } from '@expo/vector-icons'
import colors, { accentColors } from '@colors/colors'
import { useTheme } from '@context/ThemeContext'
const Tab = (props: any) => {
    const { theme, accentColor } = useTheme()
    const { onPress, icon, active } = props

    return (
        <Pressable onPress={onPress} style={styles.activeIndicator}>
            <Feather
                name={icon}
                size={23}
                color={active ? accentColors[accentColor] : colors[theme].colorText}
            />
        </Pressable>
    )
}

export default Tab

const styles = StyleSheet.create({
    activeIndicator: {
        padding: 5,
        marginBottom: 16,
    },
})
