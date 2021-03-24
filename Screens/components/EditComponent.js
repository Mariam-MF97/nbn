import React from 'react';
import {Container, Item, Input, Form, Button} from 'native-base';
import {Alert} from 'react-native';
export default class EditComponent extends React.Component {
  state = {
    id: '',
    studentName: '',
    studentAge: '',
  };

  render() {
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
        </Form>
      </Container>
    );
  }
}
