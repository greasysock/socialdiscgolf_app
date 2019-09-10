import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font'
import { View } from '@shoutem/ui';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from './reducers'
import Navigator from './Navigator'
import CourseIndex from './components/course/CourseIndex'

const store = createStore(reducers)

async function loadFonts(){
  await Font.loadAsync({
    'Rubik-Black': require('./node_modules/@shoutem/ui/fonts/Rubik-Black.ttf'),
    'Rubik-BlackItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BlackItalic.ttf'),
    'Rubik-Bold': require('./node_modules/@shoutem/ui/fonts/Rubik-Bold.ttf'),
    'Rubik-BoldItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-BoldItalic.ttf'),
    'Rubik-Italic': require('./node_modules/@shoutem/ui/fonts/Rubik-Italic.ttf'),
    'Rubik-Light': require('./node_modules/@shoutem/ui/fonts/Rubik-Light.ttf'),
    'Rubik-LightItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-LightItalic.ttf'),
    'Rubik-Medium': require('./node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf'),
    'Rubik-MediumItalic': require('./node_modules/@shoutem/ui/fonts/Rubik-MediumItalic.ttf'),
    'Rubik-Regular': require('./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf'),
    'rubicon-icon-font': require('./node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf'),
  });
}

export default (props) => {
  const [fontsAreLoaded, setFontsAreLoaded] = useState(false)
  useEffect(()=>{
    loadFonts().then(()=>setFontsAreLoaded(true))
  }, [])

  if (!fontsAreLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
        <Navigator/>
    </Provider>
  )
}