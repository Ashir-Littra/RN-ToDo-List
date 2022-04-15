import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TextInput,
  Button,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.headerText}>ToDo List</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.InputContainer}>
          <TextInput placeholder="Buy milk , go to shop ... etc" />
          <Button title="add">+</Button>
        </View>
        <View style={styles.listView}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
  },
  header: {
    height: '10%',
    width: '100%',
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 1,
  },
  headerText: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10,
  },
});
export default App;
