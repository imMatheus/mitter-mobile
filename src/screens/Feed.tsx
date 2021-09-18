import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import colors, { accentColors } from '@colors/colors'
import { useTheme } from '@context/ThemeContext'
import TweetsList from '@components/TweetsList'
import { fs } from '../firebaseConfig/firebase'
import { HomeStackNavProps } from '../params/HomeParamList'
//34:35
//53:20
//1:12:00
//1:17:34
const Feed = ({ navigation }: HomeStackNavProps<'Feed'>) => {
    const { theme, accentColor } = useTheme()
    const [tweets, setTweets] = useState<any>([])
    const tweetsRef = fs.collectionGroup('tweets')

    const goToProfile = (id: string) => {
        navigation.navigate('Profile', {
            id: id,
        })
    }

    useEffect(() => {
        tweetsRef
            // .orderBy('numberOfLikes', 'desc')
            .limit(120)
            .get()
            .then(async (documentSnapshots: any) => {
                setTweets(
                    documentSnapshots.docs.map((doc: any) => ({
                        ...doc.data(),
                        id: doc.id,
                    }))
                )
            })
    }, [])

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        text: {
            color: colors[theme].colorText,
        },
        accent: {
            color: accentColors[accentColor],
        },
        scrollView: {
            // backgroundColor: 'red',
        },
    })
    console.log(tweets[1])

    return (
        <View style={styles.container}>
            <TweetsList tweets={tweets} goToProfile={goToProfile} />
        </View>
    )
}

export default Feed
