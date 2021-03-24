import React, {useState} from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from 'native-base';
import {TextInput} from 'react-native-gesture-handler';
export default function customListItem({
  student,
  editHandler,
  submitHandler,
  deleteHandler,
}) {
  const [editing_mode, setEditing_mode] = useState(false);
  const [name, setName] = useState(student.Name);
 
  handleClick = () => {
    setEditing_mode(true);
  };

  onComplete = () => {
    editHandler(student.id, name);
    setEditing_mode(false);
  };
  return editing_mode ? (
    <>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => setName(text)}
        value={name}
      />
       
      <Button primary onPress={onComplete}>
        <Text> done </Text>
      </Button>
      
     
    </>
  ) : (
    <ListItem thumbnail>
      <Left>
        <Thumbnail circular source={require('./images/img-3.jpg')} />
      </Left>
      <Body>
        <Text>id: {student.id}</Text>
        <Text note numberOfLines={1}>
          Name: {student.Name}
        </Text>
        <Text>Age: {student.Age}</Text>
      </Body>
      <Right>
        <Right>
          <Button primary onPress={handleClick}>
            <Text> UPDATE </Text>
          </Button>
          <Button danger onPress={e => deleteHandler(student.id)}>
            <Text> DELETE </Text>
          </Button>
        </Right>
      </Right>
    </ListItem>
  );
}
