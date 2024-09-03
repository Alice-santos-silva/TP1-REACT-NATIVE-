import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

const Grid = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.gridItem} />
      <Card style={styles.gridItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%',
    height: 80, 
    marginBottom: 8,
  },
});

export default Grid;
