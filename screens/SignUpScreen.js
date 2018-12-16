import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon, Picker, Text, Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      age: 0,
      sex: 0,
      weight: 0,
      height: 0
    }
  }

  SignUp = () => {
    fetch("http://52.194.184.95/api/v1/users/signup", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(this.state)
    }).then(res => {
      return res.json()
    }).then(res => {
      this.props.navigation.navigate('SignIn')
    })
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input onChangeText={(text) => this.setState({email: text})} />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input onChangeText={(text) => this.setState({password: text})} />
            </Item>
            <Item floatingLabel>
              <Label>Name</Label>
              <Input onChangeText={(text) => this.setState({name: text})} />
            </Item>
            <Item floatingLabel>
              <Label>Age</Label>
              <Input onChangeText={(text) => this.setState({age: Number(text)})} />
            </Item>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-dropdown" />}
                style={{ width: undefined }}
                placeholder="Sex"
                onValueChange={(value) => this.setState({sex: value})}
              >
                <Picker.Item label="Man" value={0} />
                <Picker.Item label="Woman" value={1} />
              </Picker>
            </Item>
            <Item floatingLabel>
              <Label>Weight</Label>
              <Input onChangeText={(text) => this.setState({weight: Number(text)})} />
            </Item>
            <Item floatingLabel>
              <Label>Height</Label>
              <Input onChangeText={(text) => this.setState({height: Number(text)})} />
            </Item>
          </Form>
          <View style={{ backgroundColor: '#f0f0f0', height: 20 }}></View >
          <Button block onPress={this.SignUp}>
            <Text>SignUp</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}