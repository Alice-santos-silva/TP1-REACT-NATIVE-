import React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const Input = () => {
  return (
    <TextInput
      label="Input"
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40, 
    marginVertical: 8, 
  },
});

export default Input;
