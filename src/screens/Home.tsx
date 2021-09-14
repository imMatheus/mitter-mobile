import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import getNameCombinations from '@utils/getNameCombinations'
import colors, { accentColors } from '@colors/colors'
import { useTheme } from '@context/ThemeContext'
import Tweet from '@components/Tweet'
import { fs } from '@firebaseConfig/firebase'

const Home = ({ navigation }: any) => {
    const { theme, accentColor } = useTheme()
    const [tweets, setTweets] = useState<any>([])
    const tweetsRef = fs.collectionGroup('tweets')

    const goToProfile = (id: string) => {
        navigation.navigate('Profile', {
            id,
        })
    }

    useEffect(() => {
        tweetsRef
            .orderBy('numberOfLikes', 'desc')
            .limit(2)
            .get()
            .then(async (documentSnapshots: any) => {
                let g: any = []
                documentSnapshots.docs.forEach((doc: any) => {
                    g.push(doc.data())
                })
                setTweets(g)
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
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {tweets.length > 0 &&
                    tweets.map((tweet: any) => {
                        return (
                            <Tweet
                                goToUser={() => goToProfile(tweet.authorId)}
                                createdAt={tweet.date}
                                profileImage={tweet.profileImage}
                                key={tweet.authorId}
                                text={tweet.text}
                                name={tweet.name}
                                numberOfComments={tweet.numberOfComments}
                                numberOfRetweets={tweet.numberOfRetweets}
                                numberOfLikes={tweet.numberOfLikes}
                                userName={tweet.displayName}
                            />
                        )
                    })}
            </ScrollView>
        </View>
    )
}

export default Home
