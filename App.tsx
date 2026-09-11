/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar,useColorScheme} from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthPageRoute from './src/pages/AuthPages/AuthPageRoute';
import { useState } from 'react';
import UnAuthPageRoute from './src/pages/unAuthpages/UnAuthPageRoute';

const queryClient = new QueryClient();
function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [islogeed, setIslogged] = useState<boolean>(false);
  return (
      <QueryClientProvider client={queryClient}>
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {islogeed?<AuthPageRoute />:<UnAuthPageRoute/>}
    </SafeAreaProvider>
  </QueryClientProvider>
  );
}
export default App;
