import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Botao from './src/components/Botao/';
import Input from './src/components/Input/';
import Grid from './src/components/Grid/';
import Imagem from './src/components/Imagem/';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Botao />
      {/*<Input />*/}
      {/*<Grid />*/}
      {/*<Imagem />*/}
      {/*eu comentei os outros componentes para poder visualizar um a um*/}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16, 
  },
});
