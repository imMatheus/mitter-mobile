import SearchBar from '@components/SearchBar'
import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
interface Props {
    navigation: StackNavigationProp<any>
}

const Search = ({ navigation }: Props) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: (props: any) => <SearchBar {...props} />,
        })
    }, [navigation])
    return (
        <View>
            <Text>search</Text>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({})
