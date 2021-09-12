import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors, { accentColors } from '@colors/colors'
import { useTheme } from '@context/ThemeContext'
import { AntDesign } from '@expo/vector-icons'
interface Props {}

const Tweet = (props: Props) => {
    const { theme, accentColor } = useTheme()

    const styles = StyleSheet.create({
        container: {
            borderBottomWidth: 1,
            borderBottomColor: colors[theme].colorBorder,
            paddingVertical: 10,
            paddingHorizontal: 15,
            flexDirection: 'row',
        },
        imageWrapper: {
            backgroundColor: 'red',
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
            marginLeft: 5,
            color: colors[theme].colorTextDimmed,
            fontSize: 13,
        },
        atMention: {
            color: accentColors[accentColor],
        },
    })

    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}></View>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}>Gerad Piqué</Text>
                    <Text style={styles.subtitle}>@3geradpiqué - 2d</Text>
                </View>
                <Text style={styles.breadText}>
                    Lorem ipsum dolor sit amet consectetur
                    <Text style={styles.atMention}>@Ronaldo</Text> ipsa, modi maxime ipsam aliquam
                    ratione quaerat neque quod iste.
                </Text>
                <View style={styles.metadata}>
                    <View style={styles.metadataSpan}>
                        <AntDesign name='hearto' size={17} color={colors[theme].colorTextDimmed} />
                        <Text style={styles.metadataText}>231</Text>
                    </View>
                    <View style={styles.metadataSpan}>
                        <AntDesign name='hearto' size={17} color={colors[theme].colorTextDimmed} />
                        <Text style={styles.metadataText}>231</Text>
                    </View>
                    <View style={styles.metadataSpan}>
                        <AntDesign name='hearto' size={17} color={colors[theme].colorTextDimmed} />
                        <Text style={styles.metadataText}>231</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Tweet
