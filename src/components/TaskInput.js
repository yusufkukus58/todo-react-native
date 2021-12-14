import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const TaskInput = ({taskItem, onChange}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={taskItem}
        onChangeText={onChange}
        style={styles.textInput}
        placeholder={'Yapılacak...'}
        placeholderTextColor="#DCDCDC"
      />
    </View>
  );
};

export default TaskInput;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '100%',
  },
  textInput: {
    borderBottomWidth: 1,
    padding: 10,
    borderColor: 'gray',
    color: 'white',
    fontSize: 17,
    backgroundColor: '#4b4b4b',
    borderRadius: 10,
  },
});