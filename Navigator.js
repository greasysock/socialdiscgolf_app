import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator} from 'react-navigation-stack'

import Courses from './components/course/CourseIndex'

const AppTree = createSwitchNavigator({
    Courses: {screen: Courses}
})

const Navigator = createAppContainer(AppTree)
export default Navigator