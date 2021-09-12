import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Tab from './Tab'
import colors from '@colors/colors'
import { useTheme } from '@context/ThemeContext'

const TabBar = (props: any) => {
    const { state, navigation } = props
    const [currentRoute, setCurrentRoute] = useState('Home')
    const { theme } = useTheme()

    const handlePress = (target: string) => {
        navigation.navigate(target)
        setCurrentRoute(target)
    }

    const styles = StyleSheet.create({
        tabContainer: {
            bottom: 0,
            height: 85,
            paddingBottom: 20,
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            backgroundColor: colors[theme].background,
            borderTopColor: colors[theme].colorBorder,
            borderTopWidth: 1,
            width: '100%',
        },
    })

    return (
        <View pointerEvents='auto' style={styles.tabContainer}>
            {state.routes.map((route: any) => {
                return (
                    <Tab
                        active={route.name === currentRoute}
                        icon={route.params.iconName}
                        onPress={() => {
                            handlePress(route.name)
                        }}
                        key={route.key}
                    />
                )
            })}
        </View>
    )
}

export default TabBar
