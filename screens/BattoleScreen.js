import React from 'react';
import { View } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Text, Title } from 'native-base';
import Color from '../constants/Colors';


export default class BattoleScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    // this.fetchFood = new fetchAPI('/api/v1/food');
  }

  componentDidMount() {
    fetch('http://52.194.184.95/api/v1/foods').then(res => {
      console.log(res);
    })
  }

  onBack = () => {
    // this.props.navagation.navigate()
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <Container>
        <Header >
          <Left>
            <Button transparent onPress={this.onBack}>
              <Text>戻る</Text>
            </Button>
          </Left>
          <Body>
            <Title>飯テロバトル</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <View style={{ flex: 1 }} >
          <View style={{
            height: 350,
            backgroundColor: Color.darkorange,
            // flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
            <Text style={{ fontSize: 60, color: '#fff' }}>敗北</Text>
          </View>
        </View>
      </Container>
    )
  }
}
