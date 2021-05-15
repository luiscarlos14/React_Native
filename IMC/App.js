import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import IMC from './src/components/Imc'

export default function App() {
  
  return (
    <View style={styles.container}>
        <IMC />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
