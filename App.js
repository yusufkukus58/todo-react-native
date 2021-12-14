import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Alert, StatusBar} from 'react-native';

import Header from './components/Header';
import SaveButton from './components/SaveBtn';
import TodoItem from './components/TaskItem';
import SaveInput from './components/TaskInput';

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState();

  const handleOnchange = text => {
    setTask(text);
  };
  const handlePress = id => {
    setTaskList(
      taskList.map(item =>
        item.id === id ? {...item, done: !item.done} : {...item},
      ),
    );
  };
  const handleLongPress = id => {
    Alert.alert('Silmek istedinize emin misiniz?', '', [
      {
        text: 'İptal',
        style: 'cancel',
      },
      {text: 'Tamam', onPress: () => deleteItem(id)},
    ]);
  };
  const deleteItem = id => {
    setTaskList(taskList.filter(item => item.id !== id));
  };
  const handleSubmit = () => {
    if (task === '') {
      Alert.alert('Lütfen görev giriniz!');
    } else if (taskList.some(todo => todo.text === task)) {
      Alert.alert('Bu görev zaten mevcut!');
    } else {
      const item = {
        id: Date.now(),
        text: task,
        done: false,
      };
      setTaskList([...taskList, item]);
    }
  };
  const renderItem = ({item}) => (
    <TodoItem
      id={item.id}
      onPress={handlePress}
      longPress={handleLongPress}
      text={item.text}
      isDone={item.done}
    />
  );
  const notCompleted = () => {
    const tasks = taskList.filter(item => !item.done);

    return tasks;
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content" // Here is where you change the font-color
      />
      <Header tasksLeft={notCompleted().length} />
      <FlatList
        style={styles.mainContainer}
        data={taskList}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <View style={styles.bottomContainer}>
        <SaveInput textValue={task} onChange={handleOnchange} />
        <SaveButton onPress={handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4b4b4b',
    justifyContent: 'space-between',
  },
  mainContainer: {
    padding: 10,
  },
  bottomContainer: {
    padding: 10,
    margin: 10,
    backgroundColor: '#3d3d3d',
    borderRadius: 10,
    marginBottom: 30,
  },
});