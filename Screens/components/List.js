import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  List,
  // ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from 'native-base';
import AddComponent from './AddComponent';
import Students from '../Data/StudentData';
import ListItem from './ListItem';

export default class StudentList extends Component {
  state = {
    studentsArr: Students,
    id: 0,
    txtName: '',
    txtAge: '',
    editing_mode: false,
  };
  AddnewElement = student => {
    let newStudent = {
      id:
        this.state.studentsArr.reduce((x, y) => (x.id > y.id ? x.id : y.id)) +
        1,
      ...student,
      
    };
    
    this.setState({
      studentsArr: [...this.state.studentsArr, newStudent],
    });
  };
  deleteHandler = id => {
    let tempArr = this.state.studentsArr.filter(x => x.id !== id);
    this.setState({studentsArr: tempArr});
  };

  editHandler = (id, name) => {
    let tempArr = this.state.studentsArr.filter(x => x.id !== id);

    this.setState({studentsArr: [...tempArr, {Name: name, id:id}]});
  };

  submitHandler = index => {
    if (this.props.route.params.ParamObj) {
      this.state.studentsArr[
        index.i
      ].Name = this.props.route.params.ParamObj.Name;
      this.state.studentsArr[
        index.i
      ].Age = this.props.route.params.ParamObj.Age;
      this.setState({studentsArr: this.state.studentsArr});
    }
  };
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            {this.state.studentsArr.map((student, i) => {
              return (
                <ListItem
                  key={i}
                
                  student={student}
                  editHandler={this.editHandler}
                  deleteHandler={this.deleteHandler}
                  submitHandler={this.submitHandler}></ListItem>
              );
            })}
          </List>
          <AddComponent customHandler={this.AddnewElement} />
        </Content>
      </Container>
    );
  }
}
