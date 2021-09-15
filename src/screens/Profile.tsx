import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { useTheme } from '@context/ThemeContext'
import colors, { accentColors } from '@colors/colors'
import CustomButton from '@components/CustomButton'
import { AntDesign, Feather, Ionicons, FontAwesome5 } from '@expo/vector-icons'

interface Props {}

const Profile = (props: Props) => {
    const { theme, accentColor } = useTheme()
    const styles = StyleSheet.create({
        metadataContainer: {
            marginHorizontal: 14,
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

    return (
        <View>
            <View style={styles.metadataContainer}>
                <View style={styles.headerContainer}>
                    <View style={styles.profileImageContainer}>
                        <Image
                            style={styles.profileImage}
                            source={{
                                uri: 'https://cdn.fakercloud.com/avatars/justinrhee_128.jpg',
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
                <Text style={styles.userName}>CoinMarketCap</Text>
                <Text style={styles.displayName}>@CoinMarketCap</Text>
                <Text style={styles.bioText}>
                    Lorem ipsum adipisicing elit. Alias voluptas inventore veritatis dolorum officia
                    tenetur odit perferendis unde quia numquam.
                </Text>

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
                        <Text style={styles.lightText}>Rio de janeiro, Brasil</Text>
                    </View>
                    <View style={[styles.textWithIconWrapper, styles.marginRight]}>
                        <Feather
                            name='link'
                            size={14}
                            color={colors[theme].colorTextDimmed}
                            style={styles.lightMarginRight}
                        />
                        <Text style={styles.linkText}>ppathole.github.io/My-Profile</Text>
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
                        <Text style={styles.filledText}>69 937 </Text>
                        Följare
                    </Text>
                    <Text style={styles.lightText}>
                        <Text style={styles.filledText}>69 937 </Text>
                        Följare
                    </Text>
                </View>
                <View style={styles.rowWrapper}>
                    <Text style={styles.lightText}>Följs inte av någon som du följer</Text>
                </View>
            </View>
        </View>
    )
}

export default Profile
