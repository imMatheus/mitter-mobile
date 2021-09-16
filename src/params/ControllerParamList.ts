import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export type ControllerParamList = {
    Home: { iconName: string }
    Search: { iconName: string }
    Messages: { iconName: string }
}

export type ControllerProps<T extends keyof ControllerParamList> = {
    navigation: StackNavigationProp<ControllerParamList, T>
    route: RouteProp<ControllerParamList, T>
}
