import { ProfileParamList } from './ProfileParamList'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

export type SearchParamList = {
    Search: undefined
} & ProfileParamList

export type SearchStackNavProps<T extends keyof SearchParamList> = {
    navigation: StackNavigationProp<SearchParamList, T>
    route: RouteProp<SearchParamList, T>
}
