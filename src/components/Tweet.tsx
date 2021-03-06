import React from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import colors, { accentColors } from '@colors/colors'
import { useTheme } from '@context/ThemeContext'
import { AntDesign, EvilIcons } from '@expo/vector-icons'
import firebase from 'firebase/app'
import getDateSincePost from '@utils/getDateSincePost'
import { default as TweetType } from '@customTypes/Tweet'

const Tweet = ({
    text,
    name,
    displayName,
    numberOfComments,
    numberOfLikes,
    numberOfRetweets,
    profileImage,
    authorId,
    createdAt,
    goToUser,
}: TweetType) => {
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
            <Pressable
                onPress={() => {
                    goToUser(authorId)
                    console.log('authorId', authorId)
                }}
                style={styles.imageWrapper}
            >
                <Image
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 9999,
                    }}
                    source={{ uri: profileImage }}
                />
            </Pressable>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subtitle}>
                        @{displayName} - {date}
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
