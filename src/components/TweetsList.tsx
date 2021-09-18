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
                tweets.map((tweet: Tweet) => {
                    return (
                        <TweetComponent
                            goToUser={goToProfile}
                            createdAt={tweet.createdAt}
                            profileImage={tweet.profileImage}
                            key={tweet.id}
                            text={tweet.text}
                            authorId={tweet.authorId}
                            id={tweet.id}
                            name={tweet.name}
                            displayName={tweet.displayName}
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
