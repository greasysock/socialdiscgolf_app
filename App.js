import React, { useState, useEffect } from 'react';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from './reducers'
import Navigator from './Navigator'
import {loadFonts} from './helpers/appHelpers'

const store = createStore(reducers)

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
    <Provider store={store}>
        <Navigator/>
    </Provider>
  )
}