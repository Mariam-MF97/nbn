import React from 'react';
import {StyleSheet} from 'react-native';
import StudentList from './List';
export default class App extends React.Component {
  render() {
    return (
      <>
        <StudentList />
      </>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
  },
  contentData: {
    backgroundColor: 'pink',
    borderWidth: 1,
    borderColor: 'green',
  },
});
