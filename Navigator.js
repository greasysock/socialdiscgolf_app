import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import CoursesScreen from './components/course/CoursesScreen'
import UserScreen from './components/user/UserScreen'
import DiscsScreen from './components/disc/DiscsScreen'

const AppTree = createBottomTabNavigator({
    Courses: {screen: CoursesScreen},
    Discs: {screen: DiscsScreen},
    Profile: {screen: UserScreen} 
})

const Navigator = createAppContainer(AppTree)
export default Navigator