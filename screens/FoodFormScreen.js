import React, { Component } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import { Form, Item, Picker, Icon, Button, Text } from 'native-base';

export default class FoodFormScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [],
      selectedId: 0
    }
  }

  componentDidMount() {
    fetch('http://52.194.184.95/api/v1/foods', {
      method: 'GET',
    }).then(res => {
      return res.json()
    }).then(res => {
      this.setState({foods: res.foods})
      console.log(res)
    })
  }

  onSubmit = async () => {
    let apiToken = await AsyncStorage.getItem('apiToken')
    fetch("http://52.194.184.95/api/v1/diet_datas/foods", {
      method: "POST",
      headers: {
        "Authorization": apiToken,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({id: this.state.selectedId})
    }).then(res => {
      return res.json()
    }).then(res => {
      console.log(res)
      this.props.navigation.navigate('Main')
    })
  }

  render() {
    return(
      <View styles={styles.container}>
        <Form>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-dropdown" />}
              placeholder="Select food"
              selectedValue={this.state.selectedId}
              onValueChange={(value) => this.setState({selectedId: Number(value)})}
            >
            {
              this.state.foods.map((food, i) => {
                return(
                  <Picker.Item label={food.Name} value={food.ID} />
                )
              })
            }
            </Picker>
          </Item>
        </Form>
        <Button block onPress={this.onSubmit}>
          <Text>Send meal data</Text>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})