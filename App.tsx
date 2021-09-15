import React from 'react'
import Controller from './src/Controller'
import { AuthProvider } from '@context/AuthContext'
import { ThemeProvider } from '@context/ThemeContext'
import { View, Text } from 'react-native'

export default function App() {
    return (
        <AuthProvider>
            <ThemeProvider>
                <View style={{ flex: 1 }}>
                    <Controller />
                    {/* <View>
                        <Text>hellos</Text>
                    </View> */}
                </View>
            </ThemeProvider>
        </AuthProvider>
    )
}
