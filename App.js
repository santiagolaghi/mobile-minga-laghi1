import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './components/Navigator'; // Importa tu componente App
import store from './redux/store'; // Importa tu store de Redux

export default function rootContainer() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
}