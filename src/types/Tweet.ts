import firebase from 'firebase/app'

export default interface Tweet {
    authorId: string
    createdAt: firebase.firestore.Timestamp
    displayName: string
    name: string
    numberOfComments: number
    numberOfLikes: number
    numberOfRetweets: number
    profileImage: string
    text: string
    id: string
    goToUser: (id: string) => void
}
