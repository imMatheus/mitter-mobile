import React, { useEffect, useLayoutEffect, useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Pressable,
    Animated,
    Platform,
} from 'react-native'
import { useTheme } from '@context/ThemeContext'
import colors, { accentColors } from '@colors/colors'
import CustomButton from '@components/CustomButton'
import { AntDesign, Feather, Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { HomeStackNavProps } from '../params/HomeParamList'
import { fs } from '../firebaseConfig/firebase'
import User from '@customTypes/User'
import TweetsList from '@components/TweetsList'

const Profile = ({ navigation, route }: HomeStackNavProps<'Profile'>) => {
    const HEADER_MAX_HEIGHT = 120
    const HEADER_MIN_HEIGHT = 70
    const PROFILE_MAX_HEIGHT = 80
    const PROFILE_MIN_HEIGHT = 40
    const HEADER_ICONS_SIZE = 32
    const { id: currentUserId } = route.params
    const [fetchedUser, setFetchedUser] = useState<User | null>(null)
    const [usersTweets, setUsersTweets] = useState<any>([])
    const [scrollY, setScrollY] = useState(new Animated.Value(0))

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
                setUsersTweets(t.docs.map((r: any) => ({ ...r.data(), id: r.id })))
            })
    }, [currentUserId, navigation])

    useLayoutEffect(() => {
        navigation.setOptions({
            // headerShown: false,
            header: () => null,
        })
    }, [navigation])
    const headerHeight = scrollY.interpolate({
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp',
    })
    const profileImageHeight = scrollY.interpolate({
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        outputRange: [PROFILE_MAX_HEIGHT, PROFILE_MIN_HEIGHT],
        extrapolate: 'clamp',
    })
    const profileImageMarginTop = scrollY.interpolate({
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        outputRange: [HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT / 2, HEADER_MAX_HEIGHT + 12],
        extrapolate: 'clamp',
    })

    const headerTitleOpacity = scrollY.interpolate({
        inputRange: [
            0,
            HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
            HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_MIN_HEIGHT,
            HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_MIN_HEIGHT + 26,
        ],
        outputRange: [0, 0, 0, 1],
        extrapolate: 'clamp',
    })
    const headerZindex = scrollY.interpolate({
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        outputRange: [0, 1],
        extrapolate: 'clamp',
    })
    const headerTitleBottom = scrollY.interpolate({
        inputRange: [
            0,
            HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
            HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_MIN_HEIGHT,
            HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_MIN_HEIGHT + 28,
        ],
        outputRange: [-14, -14, -14, HEADER_MIN_HEIGHT / 4 - 7],
        extrapolate: 'clamp',
    })

    const headerIconMargin = scrollY.interpolate({
        // inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_MIN_HEIGHT],
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        outputRange: [(HEADER_MAX_HEIGHT - HEADER_ICONS_SIZE) / 2, 5],
        extrapolate: 'clamp',
    })
    function Header() {
        // return null
        const AnimatedPressable = Animated.createAnimatedComponent(Pressable)
        return (
            <Animated.View
                style={{
                    backgroundColor: 'blue',
                    minHeight: headerHeight,
                    flex: 1,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    overflow: 'hidden',
                    right: 0,
                    zIndex: headerZindex,
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                }}
            >
                <AnimatedPressable
                    style={[
                        styles.headerIconsWrapper,
                        {
                            marginLeft: 10,
                            marginBottom: headerIconMargin,
                        },
                    ]}
                    onPress={() => navigation.goBack()}
                >
                    <AntDesign name='arrowleft' size={20} color='#d9d9d9dd' />
                </AnimatedPressable>
                <Animated.View
                    style={{
                        alignSelf: 'flex-end',
                        bottom: headerTitleBottom,
                        flex: 1,
                        opacity: headerTitleOpacity,
                        alignItems: 'center',
                    }}
                >
                    <Text
                        style={{
                            fontWeight: '800',
                            marginRight: 8,
                            color: colors[theme].colorText,
                        }}
                    >
                        {fetchedUser!.name}
                    </Text>
                </Animated.View>
                <AnimatedPressable
                    style={[
                        styles.headerIconsWrapper,
                        { marginRight: 10, marginBottom: headerIconMargin },
                    ]}
                >
                    <Feather name='more-horizontal' size={20} color='#d9d9d9dd' />
                </AnimatedPressable>
            </Animated.View>
        )
    }
    const { theme, accentColor } = useTheme()
    const styles = StyleSheet.create({
        headerIconsWrapper: {
            width: HEADER_ICONS_SIZE,
            height: HEADER_ICONS_SIZE,
            borderRadius: 9999,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00000033',

            // (HEADER_MAX_HEIGHT - HEADER_ICONS_SIZE) /
        },
        scrollViewContainer: {
            marginTop: HEADER_MAX_HEIGHT - PROFILE_MAX_HEIGHT / 2,
        },
        metadataContainer: {
            paddingHorizontal: 14,
            paddingBottom: 14,
            borderBottomColor: colors[theme].colorBorder,
            borderBottomWidth: 1,
        },
        headerContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
        },
        profileImageContainer: {
            borderRadius: 9999,
        },
        profileImage: {
            // width: null,
            // height:null,
            flex: 1,
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
    if (!fetchedUser) return <Text>shiba: {currentUserId}</Text>
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <ScrollView
                // style={styles.scrollViewContainer}
                style={{ flex: 1 }}
                scrollEventThrottle={16}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
                    useNativeDriver: false,
                })}
            >
                <Animated.View style={[styles.metadataContainer]}>
                    <Animated.View
                        style={{
                            width: profileImageHeight,
                            height: profileImageHeight,
                            borderRadius: 9999,
                            borderColor: colors[theme].background,
                            borderWidth: 4,
                            overflow: 'hidden',
                            // position: 'absolute',
                            zIndex: 15,
                            elevation: Platform.OS === 'android' ? 50 : 0,
                            marginTop: profileImageMarginTop,
                        }}
                    >
                        <Image
                            style={{ flex: 1 }}
                            source={{
                                uri: fetchedUser.profileImage,
                            }}
                        />
                    </Animated.View>

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
                </Animated.View>

                <TweetsList tweets={usersTweets} goToProfile={() => null} />
            </ScrollView>
        </View>
    )
}

export default Profile
