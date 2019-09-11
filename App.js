import React, { useState, useEffect } from 'react';
import { AppLoading } from 'expo';
import Navigator from './Navigator'
import loadFonts from './concerns/appConcerns/loadFonts'
import ReduxProvider from './concerns/appConcerns/ReduxProvider'

console.disableYellowBox = true;

export default (props) => {
  const [fontsAreLoaded, setFontsAreLoaded] = useState(false)
  useEffect(()=>{
    loadFonts().then(()=>setFontsAreLoaded(true))
  }, [])

  if (!fontsAreLoaded) {
    return <AppLoading />;
  }

  return (
    <ReduxProvider>
        <Navigator/>
    </ReduxProvider>
  )
}