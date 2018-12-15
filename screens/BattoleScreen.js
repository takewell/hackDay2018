import React from 'react';
import { View } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Text, Title } from 'native-base';
import FadeAnim from '../components/FadeAnim';
import Color from '../constants/Colors';


export default class BattoleScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    // this.fetchFood = new fetchAPI('/api/v1/food');
    this.state = {
      time: 0,
      intervalId: null,
      resultText: '敗北'
    }
  }

  componentDidMount() {
    // fetch('http://52.194.184.95/api/v1/foods').then(res => {
    //   return res.json();
    // }).then(e => {
    //   console.log(e);
    // })
    let isWin = true;
    this.start();
    setTimeout(() => {
      clearInterval(this.state.intervalId);
      this.setState({ resultText: isWin ? '勝利' : '敗北' })
    }, 1000 * 3);
  }

  start = () => {
    let result;
    this.state.intervalId = setInterval(() => {
      this.time += 50;
      result = result === '勝利' ? '敗北' : '勝利';
      this.setState({ resultText: result });
    }, 50);
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
          {/* 5秒くらいかけて結果をだす view を実装する */}
          <View style={{
            height: 350,
            backgroundColor: Color.darkorange,
            // flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
            <FadeAnim>
              <Text style={{ fontSize: 60, color: '#fff' }}>{this.state.resultText}</Text>
            </FadeAnim>
          </View>
        </View>
      </Container>
    )
  }
}
