import SearchBar from '@components/SearchBar'
import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { SearchStackNavProps } from '../params/SearchParamList'
import SearchResults from '@components/SearchResults'
import useDebounce from '@hooks/useDebounce'
import { fs } from '../firebaseConfig/firebase'
import User from '@customTypes/User'

const Search = ({ navigation }: SearchStackNavProps<'Search'>) => {
    const [queryString, setQueryString] = useState('')
    const [queriedUsers, setQueriedUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(false)
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: (props: any) => <SearchBar {...props} setQueryString={setQueryString} />,
        })
    }, [navigation])

    useDebounce(
        async () => {
            console.log('changed')

            await fs
                .collection('users')
                .where('disassembledDisplayName', 'array-contains', queryString.toLowerCase())
                .get()
                .then(async (documentSnapshots: any) => {
                    setQueriedUsers(
                        documentSnapshots.docs.map((doc: any) => ({ ...doc.data(), uid: doc.id }))
                    )
                    if (documentSnapshots.empty) return setQueriedUsers([])
                })
            setLoading(false)
        },
        0,
        [queryString]
    )
    return (
        <View>
            <Text>search: {queryString}</Text>
            <Text>length: {queriedUsers.length}</Text>

            <SearchResults navigation={navigation} queriedUsers={queriedUsers} />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({})
