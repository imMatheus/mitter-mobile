import { useTheme } from '@context/ThemeContext'
import React from 'react'
import { ScrollView, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import colors from '@colors/colors'
import User from '@customTypes/User'
interface SearchResultsProps {
    queriedUsers: User[]
}

const SearchResults: React.FC<SearchResultsProps> = ({ queriedUsers }) => {
    const { theme } = useTheme()

    const UserResult = ({
        profileImage,
        name,
        displayName,
    }: {
        profileImage: string
        name: string
        displayName: string
    }) => (
        <Pressable style={styles.container}>
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
    console.log('res', queriedUsers)

    return (
        <ScrollView>
            {queriedUsers.map(({ profileImage, displayName, name }, i) => (
                <UserResult
                    key={i}
                    profileImage={profileImage}
                    displayName={displayName}
                    name={name}
                />
            ))}
        </ScrollView>
    )
}

export default SearchResults
