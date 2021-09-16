import React, { useRef, ReactElement, useState } from 'react'
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import colors, { accentColors } from '@colors/colors'
import { useTheme } from '@context/ThemeContext'
import { Feather } from '@expo/vector-icons'

interface Props {
    setQueryString: React.Dispatch<React.SetStateAction<string>>
}

// { setQueryString }: Props
export default function SearchBar({ setQueryString }: Props): ReactElement {
    const { theme } = useTheme()
    const inputRef = useRef<TextInput>(null)

    const styles = StyleSheet.create({
        container: {
            minWidth: '100%',
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 9999,
            flexDirection: 'row',
            backgroundColor: colors[theme].backgroundDimmed,
        },
        icon: {
            flexGrow: 0,
        },
        textInput: {
            marginLeft: 10,
            color: colors[theme].colorText,
            backgroundColor: 'red',
            flex: 1,
        },
    })

    return (
        <Pressable style={styles.container} onPress={() => inputRef.current!.focus()}>
            <Feather name='search' size={20} color={colors[theme].colorText} style={styles.icon} />
            <TextInput
                ref={inputRef}
                style={styles.textInput}
                placeholder='Search mitter...'
                returnKeyType='search'
                onChangeText={setQueryString}
            />
        </Pressable>
    )
}
