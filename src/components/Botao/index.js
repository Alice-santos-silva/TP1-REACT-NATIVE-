import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const Botao = () => {
  return (
    <Button mode="contained" style={styles.button}>
      Clique!
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40, 
    justifyContent: 'center',
  },
});

export default Botao;
