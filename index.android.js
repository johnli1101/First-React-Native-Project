/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';

export default class new_project extends Component {
  constructor(props) {
     super(props);
     this.state = {text: ''};
   }

  render() {
    let pic = {
      uri: 'https://previews.123rf.com/images/flybird163/flybird1631211/flybird163121100148/16611277-hello-world-title-written-with-chalk-on-blackboard-Stock-Photo.jpg'
    };
    let pic2 = {
      uri: 'https://cdn.programiz.com/sites/tutorial2program/files/hello-world.jpg'
    };
    let pic3 = {
      uri: 'https://i.ytimg.com/vi/zecueq-mo4M/maxresdefault.jpg'
    };
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
      /*
      <View style={{
        flex: 1,
        flexDirection:'column',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Image source={pic} style={{width: 100, height:100}}/>
        <Image source={pic2} style={{width: 100, height:100}}/>
        <Image source={pic3} style={{width: 100, height:100}}/>
      </View>
      */
      /*
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
      */
    );
  }
}

const myStyles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('new_project', () => new_project);
