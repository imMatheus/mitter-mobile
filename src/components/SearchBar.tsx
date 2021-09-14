import React, { useRef, ReactElement, useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import colors, { accentColors } from '@colors/colors'
import { useTheme } from '@context/ThemeContext'
import { Feather } from '@expo/vector-icons'

// interface Props {
//     setQueryString: React.Dispatch<React.SetStateAction<string>>
// }

// { setQueryString }: Props
export default function SearchBar(): ReactElement {
    const { theme } = useTheme()
    const searchRef = useRef<HTMLInputElement>(null)
    const [search, setSearch] = useState('')
    const querySearch = () => {
        if (searchRef.current) {
            // setQueryString(searchRef.current.value.toLowerCase())
        }
    }

    const styles = StyleSheet.create({
        container: {
            minWidth: '100%',
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderRadius: 9999,
            flexDirection: 'row',
            backgroundColor: colors[theme].backgroundDimmed,
        },
        textInput: {
            marginLeft: 10,
            color: colors[theme].colorText,
        },
    })

    return (
        <View style={styles.container}>
            <Feather name='search' size={20} color={colors[theme].colorText} />
            <TextInput
                style={styles.textInput}
                placeholder='Search mitter...'
                value={search}
                returnKeyType='search'
                onChangeText={setSearch}
            />
        </View>
    )
}
