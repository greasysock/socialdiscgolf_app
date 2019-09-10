import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import CoursesScreen from './components/course/CoursesScreen'

const AppTree = createSwitchNavigator({
    Courses: {screen: CoursesScreen}
})

const Navigator = createAppContainer(AppTree)
export default Navigator