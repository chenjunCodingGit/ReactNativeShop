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
  Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Contact from './Tab/Contact';
import Message from './Tab/Message';
import Home from './Tab/Home';
import Mine from './Tab/Mine';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';

export default class rootAndroid extends Component {
  constructor(props){
    super(props)
    this.state={
      selectedTab:'我的',
    }
  }

  render() {
      return (
        <View style={styles.container} >
          <TabNavigator>
            <TabNavigator.Item
              selected={this.state.selectedTab === '首页'}
              title="首页"
              titleStyle={styles.tabText}
              selectedTitleStyle={styles.selectedTabText}
              renderIcon={() => <FontAwesome name="address-book" size={20} color="#aaa" />}
              renderSelectedIcon={() => <FontAwesome name="address-book" size={20} color="#ff6100" />}
              onPress={() => this.setState({ selectedTab: '首页' })}>
              
              <Home />

            </TabNavigator.Item>
            <TabNavigator.Item
              selected={this.state.selectedTab === '分类'}
              title="分类"
              titleStyle={styles.tabText}
              selectedTitleStyle={styles.selectedTabText}
              renderIcon={() => <FontAwesome name="address-book" size={20} color="#aaa" />}
              renderSelectedIcon={() => <FontAwesome name="address-book" size={20} color="#ff6100" />}
              onPress={() => this.setState({ selectedTab: '分类' })}>
              
              <Contact />

            </TabNavigator.Item>
            <TabNavigator.Item
              selected={this.state.selectedTab === '购物车'}
              title="购物车"
              titleStyle={styles.tabText}
              selectedTitleStyle={styles.selectedTabText}
              renderIcon={() => <FontAwesome name="address-book" size={20} color="#aaa" />}
              renderSelectedIcon={() => <FontAwesome name="address-book" size={20} color="#ff6100" />}
              onPress={() => this.setState({ selectedTab: '购物车' })}>
              
              <Message />

            </TabNavigator.Item>

            <TabNavigator.Item
              selected={this.state.selectedTab === '我的'}
              title="我的"
              titleStyle={styles.tabText}
              selectedTitleStyle={styles.selectedTabText}
              renderIcon={() => <FontAwesome name="address-book" size={20} color="#aaa" />}
              renderSelectedIcon={() => <FontAwesome name="address-book" size={20} color="#ff6100" />}
              onPress={() => this.setState({ selectedTab: '我的' })}>
              
              <Mine />

            </TabNavigator.Item>
          </TabNavigator>
        </View>     
      );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabText: {
        color: "#999",
        fontSize: 13
    },
    selectedTabText: {
        color: "#f00",
        fontSize: 13
    },
    icon: {
        width: 20,
        height: 20
    }
});


