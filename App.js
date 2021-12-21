import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import {theme} from './src/theme';
import RootStack from './src/navigations/RootStack';
import {UserContextProvider} from './src/contexts/UserContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default App;
