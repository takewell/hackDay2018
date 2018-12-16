import React from 'react';
import { View, AsyncStorage } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Text, Title, Content } from 'native-base';
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
      resultText: '敗北',
      text: null
    }
  }

  componentDidMount() {

    let apiToken;
    let email;
    let isWin = false;
    AsyncStorage.getItem('apiToken').then(res => {
      console.log('apitoken res', res);
      apiToken = res;

      fetch("http://52.194.184.95/api/v1/battles/matching", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Authorization": apiToken
        },
      }).then(res => {
        return res.json()
      }).then(json => {
        console.log('user json', json);
        email = json.email;
      });

      fetch("http://52.194.184.95/api/v1/battles", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Authorization": apiToken
        },
        body: JSON.stringify({ opponent_email: email, battle_type: 'day' })
      }).then(res => {
        return res.json()
      }).then(json => {

        console.log('勝負の結果', json.result);
        if (json.result === 'Win') {
          isWin = true;
        } else if (json.result === 'Lose') {
          isWin = false;
        } else if (json.result === 'Drow') {
          isWin = false;
        }
      });

      this.start();
      setTimeout(() => {
        clearInterval(this.state.intervalId);
        this.setState({ resultText: isWin ? '勝利' : '敗北' })
        const winText = 'あなたは闘争に勝利しました。飯テロ画像を他人に投下して、ポイントを下げましょう。'
        const loseText = 'あなたは闘争に敗北しました。飯テロ画像が投下されポイントを下げられる可能性があります。観念して飯を食べまくるか、運動して飯テロ攻撃で仕返ししましょう。'
        const text = isWin ? winText : loseText;
        this.setState({ text: text });
      }, 1000 * 3);

    });
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
          <View style={{
            height: 350,
            backgroundColor: Color.darkorange,
            // flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
            <FadeAnim>
              <Text style={{ fontSize: 120, color: '#fff' }}>{this.state.resultText}</Text>
            </FadeAnim>
          </View>
        </View>
        {<Content><Text style={{ fontSize: 40 }}>{this.state.text}</Text></Content>}
      </Container>
    )
  }
}
