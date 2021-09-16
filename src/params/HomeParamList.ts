import { ProfileParamList } from './ProfileParamList'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

export type HomeParamList = {
    Feed: undefined
} & ProfileParamList

export type HomeStackNavProps<T extends keyof HomeParamList> = {
    navigation: StackNavigationProp<HomeParamList, T>
    route: RouteProp<HomeParamList, T>
}
