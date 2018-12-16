import React, { Component } from 'react';
import { View, AsyncStorage, StyleSheet } from 'react-native';
import { Container, Header, Content, ListItem, Icon, Form, Item, Picker, Text, Title, Body, Left, Right, Button } from 'native-base';

export default class AddMotionScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props)
    this.state = {
      motions: [],
      name: null
    }
  }

  componentDidMount() {
    fetch("http://52.194.184.95/api/v1/motions").then(res => {
      return res.json()
    }).then(json => {
      console.log('motion return json', json);
      this.setState({ motions: json.motions });
    });
  }

  AddMotion = () => {
    AsyncStorage.getItem('apiToken').then(res => {
      console.log('apitoken res', res);
      apiToken = res;

      fetch("http://52.194.184.95/api/v1/motions", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Authorization": apiToken
        },
        body: JSON.stringify(this.state)
      }).then(res => {
        return res.json()
      }).then(json => {
        console.log('motion return json', json);
        this.setState({ motions: json.motions });
      });

    });
  }

  onBack = () => {
    // this.props.navagation.navigate()
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View>
        <Header >
          <Left>
            <Button transparent onPress={this.onBack}>
              <Text>戻る</Text>
            </Button>
          </Left>
          <Body>
            <Title>運動の選択</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <View styles={styles.container}>
          <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-dropdown" />}
                placeholder="運動を選ぶ"
                selectedValue={this.state.selectedId}
                onValueChange={(value) => this.setState({ selectedId: Number(value) })}
              >
                {
                  this.state.motions.map((motion, i) => {
                    return (
                      <Picker.Item label={motion.Name} value={motion.ID} />
                    )
                  })
                }
              </Picker>
            </Item>
          </Form>
          <Button block onPress={this.AddMotion}>
            <Text>運動を記録する</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})