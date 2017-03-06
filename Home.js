/**
 * Created by asus on 2017/2/26.
 */
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Platform
} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>dd1111111111111d</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabText: {
    color: "#000000",
    fontSize: 13
  },
  selectedTabText: {
    color: "#999999",
    fontSize: 13
  },
  icon: {
    width: 20,
    height: 20
  }
});
