import React from 'react';
import { AppRegistry } from 'react-native';

import App from './src/App';

const Index = () => {
  return (
    <App />
  );
};

AppRegistry.registerComponent('AwesomeProjectNative', () => Index);
