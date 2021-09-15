import Tweet from '@customTypes/Tweet'
import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { default as TweetComponent } from '@components/Tweet'
interface Props {
    tweets: Tweet[]
    goToProfile: (id: string) => void
}

const TweetsList = ({ tweets, goToProfile }: Props) => {
    return (
        <ScrollView>
            {tweets.length > 0 &&
                tweets.map((tweet: any) => {
                    return (
                        <TweetComponent
                            goToUser={() => goToProfile(tweet.authorId)}
                            createdAt={tweet.date}
                            profileImage={tweet.profileImage}
                            key={tweet.id}
                            text={tweet.text}
                            name={tweet.name}
                            userName={tweet.displayName}
                            numberOfComments={tweet.numberOfComments}
                            numberOfRetweets={tweet.numberOfRetweets}
                            numberOfLikes={tweet.numberOfLikes}
                        />
                    )
                })}
        </ScrollView>
    )
}

export default TweetsList

const styles = StyleSheet.create({})
