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
  const [id, setId] = useState(0);
  const [todo, setTodo] = useState('');
  const todoAdder = () => {
    setId(id + 1);
    setTodoList([...todoList, {task: todo, id}]);
    setTodo('');
  };
  function deleteItem(data) {
    const newArr = todoList.filter(item => item.id != data.id);
    setTodoList(newArr);
    console.log(todoList);
  }
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.headerText}>ToDo List</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.InputContainer}>
          <TextInput
            value={todo}
            style={styles.inp}
            placeholder="Buy milk , go to shop ... etc"
            onChangeText={input => setTodo(input)}
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
                  onPress={() => {
                    deleteItem(item);
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
