import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAIXwsTucX9arWBHK8yWNpJLkUkbmMThKE',
      authDomain: 'authentication-e14ff.firebaseapp.com',
      databaseURL: 'https://authentication-e14ff.firebaseio.com',
      projectId: 'authentication-e14ff',
      storageBucket: 'authentication-e14ff.appspot.com',
      messagingSenderId: '227486612017'
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
