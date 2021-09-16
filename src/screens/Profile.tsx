import React, { useEffect, useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { useTheme } from '@context/ThemeContext'
import colors, { accentColors } from '@colors/colors'
import CustomButton from '@components/CustomButton'
import { AntDesign, Feather, Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { HomeStackNavProps } from '../params/HomeParamList'
import { fs } from '../firebaseConfig/firebase'
import User from '@customTypes/User'
import TweetsList from '@components/TweetsList'

const Profile = ({ navigation, route }: HomeStackNavProps<'Profile'>) => {
    const { id: currentUserId } = route.params
    const [fetchedUser, setFetchedUser] = useState<User | null>(null)
    const [usersTweets, setUsersTweets] = useState<any>([])
    console.log(currentUserId)
    useEffect(() => {
        fs.doc(`users/${currentUserId}`)
            .get()
            .then((user: any) => {
                console.log(user.data())
                setFetchedUser(user.data())
            })
        fs.collection(`users/${currentUserId}/tweets`)
            .get()
            .then((t: any) => {
                setUsersTweets(t.docs.map((r: any) => r.data()))
            })
    }, [])
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'hej',
        })
    }, [navigation])
    const { theme, accentColor } = useTheme()
    const styles = StyleSheet.create({
        metadataContainer: {
            paddingHorizontal: 14,
            paddingBottom: 14,
            borderBottomColor: colors[theme].colorBorder,
            borderBottomWidth: 1,
        },
        headerContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        profileImageContainer: {
            width: 60,
            height: 60,
            backgroundColor: 'red',
            borderRadius: 9999,
            padding: 2,
            top: -15,
        },
        profileImage: {
            width: '100%',
            height: '100%',
            backgroundColor: '#3066d1',
            borderRadius: 9999,
        },
        headerButtons: {},
        userName: {
            fontSize: 26,
            fontWeight: '700',
            marginBottom: 5,
            color: colors[theme].colorText,
        },
        displayName: {
            fontSize: 15,
            fontWeight: '400',
            color: colors[theme].colorTextDimmed,
            marginBottom: 20,
        },
        bioText: {
            fontSize: 15,
            fontWeight: '400',
            color: colors[theme].colorText,
        },
        rowWrapper: {
            // backgroundColor: 'blue',
            flexDirection: 'row',
            marginTop: 12,
            flexWrap: 'wrap',
        },
        followingText: {
            marginRight: 10,
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
        linkText: {
            fontSize: 13,
            color: accentColors[accentColor],
        },
        marginRight: {
            marginRight: 10,
        },
        textWithIconWrapper: {
            alignItems: 'center',
            flexDirection: 'row',
        },
        lightMarginRight: {
            marginRight: 4,
        },
    })
    if (!fetchedUser) return <Text>shiba</Text>
    return (
        <ScrollView>
            <View style={styles.metadataContainer}>
                <View style={styles.headerContainer}>
                    <View style={styles.profileImageContainer}>
                        <Image
                            style={styles.profileImage}
                            source={{
                                uri: fetchedUser.profileImage,
                            }}
                        />
                    </View>
                    <View style={styles.headerButtons}>
                        <CustomButton
                            title='Follow'
                            onPress={() => alert('heeee')}
                            color='accent'
                        />
                    </View>
                </View>
                <Text style={styles.userName}>{fetchedUser.name}</Text>
                <Text style={styles.displayName}>@{fetchedUser.displayName}</Text>
                <Text style={styles.bioText}>{fetchedUser.bio}</Text>

                <View style={[styles.rowWrapper, styles.textWithIconWrapper]}>
                    <AntDesign
                        name='calendar'
                        size={14}
                        color={colors[theme].colorTextDimmed}
                        style={styles.lightMarginRight}
                    />
                    <Text style={styles.lightText}>Gick med mars 2013</Text>
                </View>
                <View style={styles.rowWrapper}>
                    <View style={[styles.textWithIconWrapper, styles.marginRight]}>
                        <Ionicons
                            name='location-outline'
                            size={14}
                            color={colors[theme].colorTextDimmed}
                            style={styles.lightMarginRight}
                        />
                        <Text style={styles.lightText}>{fetchedUser.location}</Text>
                    </View>
                    <View style={[styles.textWithIconWrapper, styles.marginRight]}>
                        <Feather
                            name='link'
                            size={14}
                            color={colors[theme].colorTextDimmed}
                            style={styles.lightMarginRight}
                        />
                        <Text style={styles.linkText}>{fetchedUser.url}</Text>
                    </View>
                    <View style={[styles.textWithIconWrapper, styles.marginRight]}>
                        <FontAwesome5
                            name='birthday-cake'
                            size={14}
                            color={colors[theme].colorTextDimmed}
                            style={styles.lightMarginRight}
                        />
                        <Text style={styles.lightText}>Född 1998</Text>
                    </View>
                </View>
                <View style={styles.rowWrapper}>
                    <Text style={[styles.lightText, styles.marginRight]}>
                        <Text style={styles.filledText}>{fetchedUser.amountOfFollowers}</Text>
                        Följare
                    </Text>
                    <Text style={styles.lightText}>
                        <Text style={styles.filledText}>{fetchedUser.amountOfFollowing}</Text>
                        Följer
                    </Text>
                </View>
                <View style={styles.rowWrapper}>
                    <Text style={styles.lightText}>Följs inte av någon som du följer</Text>
                </View>
            </View>

            <TweetsList tweets={usersTweets} goToProfile={() => null} />
        </ScrollView>
    )
}

export default Profile
