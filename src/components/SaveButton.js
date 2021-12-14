import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const SaveBtn = ({onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text} onPress={onPress}>
          Ekle
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SaveBtn;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '90%',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#808080',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});