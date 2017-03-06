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

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

export default class Mine extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.registerBtn}><Text style={{fontSize:18,color:'#fff'}}>注册</Text></View>
          <View style={styles.Myhead}>
            <View style={styles.iconHead}>
              <Image style={styles.headImg} source={require('../../images/mine.headn.jpg')}/>
            </View>
            <View><Text style={{color:'#fff'}}>admin</Text></View>
          </View>
          <View style={styles.loginBtn}><Text style={{fontSize:18,color:'#fff'}}>登录</Text></View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header:{
    width:WIDTH,
    height:200,
    backgroundColor:'#ff6100',
    flexDirection:'row',
  },
  registerBtn:{
    flex:1.2,
    height:200,
    alignItems:'flex-end',
    marginTop:8,
    
  },
  Myhead:{
    flex:7,
    height:200,
    alignItems:'center',
    justifyContent:'center'
  },
  iconHead:{
    width:80,
    height:80,
    borderRadius:40,
  },
  headImg:{
    width:80,
    height:80,
    borderRadius:40
  },
  loginBtn:{
    flex:1.2,
    height:200,
    alignItems:'flex-start',
    marginTop:8,
    
  },
  
});
