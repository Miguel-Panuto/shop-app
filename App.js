import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import SectionsNavigator from './src/navigation/Navigator';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchFonts = async () => {
    await Font.loadAsync({
      'noto-sans': require('./assets/fonts/NotoSans-Regular.ttf'),
      'noto-sans-bold': require('./assets/fonts/NotoSans-Bold.ttf'),
      'mcp-iconpack': require('./assets/fonts/mcp-iconpack.ttf'),
    });
  }

  if (!isLoaded)
    return <AppLoading startAsync={fetchFonts} onFinish={() => setIsLoaded(true)}/>

  return <SectionsNavigator />
}
