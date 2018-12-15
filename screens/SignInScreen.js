import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import { Text, Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';

export default class SignInScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }

  Login = () => {
    fetch("http://52.194.184.95/api/v1/users/signin", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(this.state)
    }).then(res => {
      return res.json()
    }).then(res => {
      console.log(JSON.stringify(res.api_token))
      AsyncStorage.setItem('apiToken', res.api_token)
      this.props.navigation.navigate('Main')
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
          </Form>
          <View style={{ backgroundColor: '#f0f0f0', height: 20 }}></View >
          <Button block onPress={this.Login}>
            <Text>SignIn</Text>
          </Button>
          <View style={{ backgroundColor: '#f0f0f0', height: 7 }}></View >
          <Text>You don't have accout?</Text>
          <Button info onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text>Please Signup</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}