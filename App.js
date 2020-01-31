import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Navigator from './src/navigation/Navigator';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchFonts = async () => {
    await Font.loadAsync({
      'noto-sans': require('./assets/fonts/NotoSans-Regular.ttf'),
      'noto-sans-bold': require('./assets/fonts/NotoSans-Bold.ttf'),
    });
  }

  if (!isLoaded)
    return <AppLoading startAsync={fetchFonts} onFinish={() => setIsLoaded(true)}/>
    
  return <Navigator/>
}
