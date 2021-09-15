import firebase from 'firebase/app'

export default interface Tweet {
    goToUser: () => void
    createdAt: firebase.firestore.Timestamp
    profileImage: string
    text: string
    name: string
    numberOfComments: number
    numberOfRetweets: number
    numberOfLikes: number
    userName: string
}
