import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { ROUTES } from '../../config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    color: 'white',
  },
});

const ProductScreen = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => {}}>
      <Text style={styles.text}>Again..</Text>
    </TouchableOpacity>
  </View>
);

export default ProductScreen;