
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const TaskItem = ({id, onPress, text, isDone, longPress}) => {
  return (
    <View style={[styles.container, isDone && styles.itemDone]}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onPress(id)}
        onLongPress={() => longPress(id)}>
        <Text style={[styles.text, isDone && styles.decoration]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#ff9f1a',
    borderRadius: 10,
  },
  button: {
    alignItems: 'flex-start',
    padding: 10,
  },
  text: {
    color: '#4b4b4b',
    fontSize: 17,
    fontWeight: '600',
  },
  itemDone: {
    backgroundColor: '#3ae374',
  },
  decoration: {
    fontStyle: 'italic',
    textDecorationLine: 'line-through',
  },
});