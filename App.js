import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import {theme} from './src/theme';
import RootStack from './src/navigations/RootStack';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
