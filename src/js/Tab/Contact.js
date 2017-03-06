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
import ScrollableTabView, { ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view';

export default class Contact extends Component {
  render() {
    return (
      <ScrollableTabView
        /*tabBarPosition='top'
        onChangeTab={(obj) => {
          console.log('index:' + obj.i);
        }}//点击tab获取index值，从0开始
        //locked={false}//手指是否能拖动视图
        onScroll={(postion) => {
            // float类型 [0, tab数量-1]
            console.log('scroll position:' + postion);
          }
        }*/
        scrollWithoutAnimation={true}
        tabBarUnderlineStyle={{backgroundColor: '#ff6100'}}
        tabBarBackgroundColor='#cecece'
        tabBarActiveTextColor='#ff6100'
        tabBarInactiveTextColor='#000'
        tabBarTextStyle={{fontSize: 18}}
        renderTabBar={() => <DefaultTabBar/>}>


        <Text tabLabel='Tab1'>1111111111111</Text>
        <Text tabLabel='Tab2'>22222222222</Text>
        <Text tabLabel='Tab3'>33333333333</Text>

      </ScrollableTabView>
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
