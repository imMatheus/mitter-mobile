import SearchBar from '@components/SearchBar'
import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { SearchStackNavProps } from '../params/SearchParamList'
import SearchResults from '@components/SearchResults'
import useDebounce from '@hooks/useDebounce'
import { fs } from '../firebaseConfig/firebase'
import User from '@customTypes/User'
import firebase from 'firebase/app'

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
                // .where('disassembledDisplayName', 'array-contains-any', [queryString])
                .get()
                .then(async (documentSnapshots: any) => {
                    let g: any = ['hej']
                    documentSnapshots.docs.forEach((doc: any) => {
                        g.push({ ...doc.data(), id: doc.id })
                    })
                    console.log(g)

                    setQueriedUsers(g)
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

            <SearchResults queriedUsers={queriedUsers} />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({})
