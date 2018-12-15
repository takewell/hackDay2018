import React from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image
          style={{ width: 300, height: 300 }}
          source={{ uri: 'https://s3-ap-northeast-1.amazonaws.com/meshitero/photo/%E3%82%AA%E3%83%A0%E3%83%A9%E3%82%A4%E3%82%B9.jpeg' }}
        />
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />
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
