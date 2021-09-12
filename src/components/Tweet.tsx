import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import colors, { accentColors } from '@colors/colors'
import { useTheme } from '@context/ThemeContext'
import { AntDesign, EvilIcons } from '@expo/vector-icons'
import firebase from 'firebase/app'
import getDateSincePost from '@utils/getDateSincePost'
interface Props {
    text: string
    name: string
    userName: string
    numberOfComments: number
    numberOfLikes: number
    numberOfRetweets: number
    profileImage: string
    createdAt: firebase.firestore.Timestamp
}

const Tweet = ({
    text,
    name,
    userName,
    numberOfComments,
    numberOfLikes,
    numberOfRetweets,
    profileImage,
    createdAt,
}: Props) => {
    const { theme, accentColor } = useTheme()
    let postSecs = Math.floor(createdAt.toMillis() / 1000)

    let date = getDateSincePost(postSecs)

    const styles = StyleSheet.create({
        container: {
            borderBottomWidth: 1,
            borderBottomColor: colors[theme].colorBorder,
            paddingVertical: 10,
            paddingHorizontal: 15,
            flexDirection: 'row',
        },
        imageWrapper: {
            width: 38,
            height: 38,
            borderRadius: 9999,
            marginRight: 12,
        },
        content: {
            flexShrink: 1,
        },
        header: {
            flexDirection: 'row',
            marginBottom: 4,
            flexWrap: 'wrap',
        },
        title: {
            fontWeight: '800',
            marginRight: 8,
            color: colors[theme].colorText,
        },
        subtitle: {
            color: colors[theme].colorTextDimmed,
        },
        breadText: {
            color: colors[theme].colorText,
            marginBottom: 10,
        },
        metadata: {
            flexDirection: 'row',
            flexWrap: 'nowrap',
        },
        metadataSpan: {
            flexShrink: 1,
            width: '100%',
            alignItems: 'center',
            flexDirection: 'row',
        },
        metadataText: {
            marginLeft: 6,
            color: colors[theme].colorTextDimmed,
            fontSize: 13,
        },
        atMention: {
            color: accentColors[accentColor],
        },
    })

    // <Text style={styles.atMention}> @Ronaldo </Text>
    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 9999,
                    }}
                    source={{ uri: profileImage }}
                />
            </View>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subtitle}>
                        @{userName} - {date}
                    </Text>
                </View>
                <Text style={styles.breadText}>{text}</Text>
                <View style={styles.metadata}>
                    <View style={styles.metadataSpan}>
                        <EvilIcons name='comment' size={20} color={colors[theme].colorTextDimmed} />
                        <Text style={styles.metadataText}>{numberOfComments}</Text>
                    </View>
                    <View style={styles.metadataSpan}>
                        <EvilIcons name='retweet' size={20} color={colors[theme].colorTextDimmed} />
                        <Text style={styles.metadataText}>231</Text>
                    </View>
                    <View style={styles.metadataSpan}>
                        <AntDesign name='hearto' size={17} color={colors[theme].colorTextDimmed} />
                        <Text style={styles.metadataText}>{numberOfLikes}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Tweet
