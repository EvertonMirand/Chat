/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useFetch } from './hooks/useFetch';
import api from './services/api';

const App = (): JSX.Element => {
  const { data, error } = useFetch('');
  useEffect(() => {
    console.warn(data);
    console.warn(error);
    api.get('').then(({ data }) => {
      console.warn(data);
    });
  }, []);

  return (
    <>
      <View />
    </>
  );
};

export default App;
