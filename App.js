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
        <Text>ToDo List</Text>
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
    backgroundColor: 'yellow',
  },
});
export default App;
