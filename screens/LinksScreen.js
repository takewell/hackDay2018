import React from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: '飯テロ通知',
  };

  constructor(props) {
    super(props);
    this.state = {
      foods: [],
      hoge: 0
    }
  }

  componentDidMount() {
    console.log(this.state);
    fetch('http://52.194.184.95/api/v1/foods').then(res => {
      return res.json();
    }).then(json => {
      console.log('foods', json.foods);
      this.setState({ foods: json.foods });
    });
    this.setState({ hoge: 1 });
    console.log(this.state.hoge);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Content>
          {this.state.foods.map((food) => {
            return (
              <Card>
                <CardItem>
                  <Left>
                    <Body>
                      <Text>{food.Name}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image source={{ uri: food.image_url }} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
              </Card>
            )
          })}
        </Content>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
