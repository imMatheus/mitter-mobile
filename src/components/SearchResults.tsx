import { useTheme } from '@context/ThemeContext'
import React from 'react'
import { ScrollView, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import colors from '@colors/colors'
import User from '@customTypes/User'
import { SearchStackNavProps } from '../params/SearchParamList'
interface SearchResultsProps {
    queriedUsers: User[]
}

type Props = SearchResultsProps & SearchStackNavProps<'Search'>
const SearchResults: React.FC<Props> = ({ navigation, queriedUsers }) => {
    const { theme } = useTheme()

    const UserResult = ({
        profileImage,
        name,
        displayName,
        uid,
    }: {
        profileImage: string
        name: string
        displayName: string
        uid: string
    }) => (
        <Pressable
            style={styles.container}
            onPress={() => {
                navigation.navigate('Profile', {
                    id: uid,
                })

                console.log('uid:', uid)
            }}
        >
            <View style={styles.imageWrapper}>
                <Image
                    style={styles.image}
                    source={{
                        uri: profileImage,
                    }}
                />
            </View>
            <View style={styles.textWrapper}>
                <Text style={styles.filledText}>{name}</Text>
                <Text style={styles.lightText}>@{displayName}</Text>
            </View>
        </Pressable>
    )
    const styles = StyleSheet.create({
        container: {
            padding: 10,
            flexDirection: 'row',
        },
        imageWrapper: {
            flexGrow: 0,
            height: 35,
            width: 35,
            borderRadius: 9999,
            marginRight: 6,
        },
        image: {
            width: '100%',
            height: '100%',
            borderRadius: 9999,
        },
        textWrapper: {
            flex: 1,
        },
        lightText: {
            fontSize: 13,
            color: colors[theme].colorTextDimmed,
        },
        filledText: {
            fontSize: 13,
            fontWeight: '700',
            color: colors[theme].colorText,
        },
    })

    return (
        <ScrollView>
            {queriedUsers.map(({ profileImage, displayName, name, uid }, i) => (
                <UserResult
                    key={i}
                    profileImage={profileImage}
                    displayName={displayName}
                    name={name}
                    uid={uid}
                />
            ))}
        </ScrollView>
    )
}

export default SearchResults
