import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TextInput,
  Button,
} from 'react-native';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState({id: 0, task: ''});
  const todoAdder = () => {
    setTodoList([...todoList, todo]);
    console.log(todoList);
  };
  function deleteItem(id) {
    const newList = todoList.filter(item => item.id !== id);
    setTodoList([...newList]);
  }
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.headerText}>ToDo List</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.inp}
            placeholder="Buy milk , go to shop ... etc"
            onChangeText={input => setTodo({id: todoList.id => prev + 1, task: input})}
          />
          <Button onPress={todoAdder} title="add">
            Add
          </Button>
        </View>
        <View style={styles.listView}>
          <FlatList
            data={todoList}
            renderItem={({item}) => (
              <View>
                <Text>{item.task}</Text>
                <Button
                  title="del"
                  onPress={item => {
                    deleteItem(item.id);
                  }}>
                  del
                </Button>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    // backgroundColor: 'black',
    height: '100%',
    width: '100%',
  },
  header: {
    width: '100%',
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
  },
});
export default App;
