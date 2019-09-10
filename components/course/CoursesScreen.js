import React from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet } from 'react-native'
import {NavigationBar, Title, View, Screen, ImageBackground, Subtitle, Tile, Divider, ListView, Icon} from '@shoutem/ui'

const styles = StyleSheet.create({
    container: {
        paddingTop: 0
    },
    content: {
        paddingTop: 200
    }
})

const renderRating = (rawRating) => {
    const rating = rawRating.toFixed(0)
    const ratingComponents = Array(rating)
    for(var i = 0; i < rating; i++){
        ratingComponents[i] = <Icon style={{color:'white'}} name="add-to-favorites-on" key={i}/>
    }
    for(var j = 0; j < 5-rating; j++){
        ratingComponents[i+j] = <Icon style={{color:'white'}} name="add-to-favorites-off" key={i+j}/>
    }
    return ratingComponents
}

const renderCourseRow = (course) => {
    return (
    <View>
        <ImageBackground
        styleName="large-banner"
        source={{ uri: course.image.url }}
        >
        <Tile>
            <Title styleName="md-gutter-bottom">{course.name}</Title>
            <Subtitle styleName="sm-gutter-horizontal">{course.address}</Subtitle>
            <Subtitle>{course.baskets} Baskets</Subtitle>
            <Subtitle>Par {course.par}</Subtitle>
            <Title>{renderRating(course.rating)}</Title>
        </Tile>
        </ImageBackground>
        <Divider styleName="line" />
  </View>
    )
}
const CoursesScreen = (props) => {

    const courses = useSelector(state=>state.courses)
    return (
        <Screen style={styles.container}>
            <NavigationBar title="COURSES" styleName="inline"/>
            <ListView style={styles.content} data={courses} renderRow={renderCourseRow}/>
        </Screen>
    )
}

export default CoursesScreen