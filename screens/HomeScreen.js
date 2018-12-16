import React from 'react';
import {
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import FadeAnim from '../components/FadeAnim';
import ProgressCirCle from '../components/Progres';
import Color from '../constants/Colors';
import BattoleScreen from './BattoleScreen';

// export const BattoleStack = createStackNavigator({
//   Battole: BattoleScreen,
// });

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    let users;
    fetch("http://52.194.184.95/api/v1/users", {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    }).then(res => {
      return res.json()
    }).then(json => {
      users = json;
      console.log('user', users);
    })
  }

  transBattle = () => {
    console.log('navigate', this.props.navigation.navigate);
    this.props.navigation.navigate('Battole');
  }

  transFoodForm = () => {
    this.props.navigation.navigate('FoodForm');
  }

  render() {
    return (
      <View style={styles.container} >
        <View style={{
          height: 350,
          backgroundColor: Color.darkorange,
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
          <Text> <Text style={{ color: '#fff' }}>ダイエット指数</Text> <Text style={{ fontSize: 60, color: '#fff' }}>20</Text></Text>
          {/* <FadeAnim style={{ marginBottom: 100, alignItems: 'center', width: 250, height: 50 }}>
            <ProgressCirCle></ProgressCirCle>
          </FadeAnim> */}
        </View>
        <Container>
          <Content>
            <List>
              <ListItem thumbnail onPress={this.transBattle}>
                <Left>
                  <Thumbnail square source={require('../assets/images/battole.png')} />
                </Left>
                <Body>
                  <Text>あなたの飯テロバトル戦績</Text>
                  <Text note numberOfLines={1}>12月 15 日 午後 16:00</Text>
                </Body>
                <Right>
                  <Text>
                    <Text style={{ fontSize: 26 }}>200</Text>
                    <Text> point</Text>
                  </Text>
                </Right>
              </ListItem>
              <View style={{ backgroundColor: '#f0f0f0', height: 7 }}></View >
              <ListItem thumbnail onPress={this.transFoodForm}>
                <Left>
                  <Thumbnail square source={require('../assets/images/food-apple.png')} />
                </Left>
                <Body>
                  <Text>食べ物</Text>
                  <Text note numberOfLines={1}>12月 15 日 午後 16:00</Text>
                </Body>
                <Right>
                  <Text>
                    <Text style={{ fontSize: 26 }}>300</Text>
                    <Text> kcal</Text>
                  </Text>
                </Right>
              </ListItem>
              <View style={{ backgroundColor: '#f0f0f0', height: 7 }}></View >
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={require('../assets/images/running.png')} />
                </Left>
                <Body>
                  <Text>運動</Text>
                  <Text note numberOfLines={1}>12月 15 日 午後 16:00</Text>
                </Body>
                <Right>
                  <Text>
                    <Text style={{ fontSize: 26 }}>200</Text>
                    <Text> kcal</Text>
                  </Text>
                </Right>
              </ListItem>
              <View style={{ backgroundColor: '#f0f0f0', height: 7 }}></View >
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={require('../assets/images/weight-solid.png')} />
                </Left>
                <Body>
                  <Text>体重</Text>
                  <Text note numberOfLines={1}>12月 15 日 午後 16:00</Text>
                </Body>
                <Right>
                  <Text>
                    <Text style={{ fontSize: 26 }}>60.0</Text>
                    <Text> kg</Text>
                  </Text>
                </Right>
              </ListItem>
            </List>
          </Content>
        </Container>
      </View >
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});