import React from 'react';
import {Container, Form, Input, Item, Button, Text} from 'native-base';
export default class AddComponent extends React.Component {
  state = {
    id: '',
    studentName: '',
    studentAge: '',
  };

  render() {
    let addNewStudent = () => {
      let newStudent = {
        Name: this.state.studentName,
        Age: this.state.studentAge,
      };
      this.props.customHandler(newStudent);
      this.setState({
        studentName: '',
      });
      this.setState({
        studentAge: '',
      });
    };
    return (
      <Container>
        <Form>
          <Item>
            <Input
              keyboardType="default"
              placeholder="Student Name:"
              value={this.state.studentName}
              onChangeText={studentName => this.setState({studentName})}
            />
          </Item>
          <Item>
            <Input
              placeholder="Age"
              keyboardType="numeric"
              value={this.state.studentAge}
              onChangeText={studentAge => this.setState({studentAge})}
            />
          </Item>

          <Button
            style={{alignSelf: 'center', marginTop: 10, borderRadius: 25}}
            onPress={() => addNewStudent()}>
            <Text>ADD</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}
