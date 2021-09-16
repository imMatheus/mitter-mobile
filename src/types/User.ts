import firebase from 'firebase/app'

type User = {
    uid: string
    email: string
    name: string
    displayName: string
    profileImage: string
    bio: string
    location: string
    url: string
    joinedAt: firebase.firestore.Timestamp
    amountOfFollowers: number
    amountOfFollowing: number
    theme: 'light' | 'dimmed' | 'dark'
} & firebase.User &
    firebase.firestore.DocumentData

export default User
