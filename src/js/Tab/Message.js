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
  Platform,
  Button,
  Dimensions,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView
} from 'react-native';

//export const WIDTH = Dimensions.get('window').width;
//export const HEIGHT = Dimensions.get('window').height;
const { width } = Dimensions.get('window')

export default class Message extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.conTop}>
          <Text style={styles.shopcarTitle}>购物车</Text>
          <Text style={styles.shopcarClear}>清空购物车</Text>
        </View>

        <ScrollView>
          <View>
            
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input:{
    height: 40,
    width:200,
    fontSize:12,
    color:'#dcdcdc',
    marginTop:5
  },
  conTop:{
    flexDirection:'row',
    height:50,
    width,
    borderBottomWidth:1,
    borderBottomColor:'#bbb',
    alignItems:'center',
  },
  shopcarTitle:{
    flex:8,
    textAlign:'center',
    fontSize:19,
    color:'#000'
  },
  shopcarClear:{
    flex:2.5,
    textAlign:'center',
    fontSize:15
  },

});
