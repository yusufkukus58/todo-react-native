import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const Header = ({tasksLeft}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Task List</Text>
      <Text style={styles.text2}>Kalan Görev: {tasksLeft}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    padding: 10,
  },
  text: {
    color: '#ff9f1a',
    fontSize: 40,
    fontWeight: 'bold',
  },
  text2: {
    color: '#ff9f1a',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
