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
import Swiper from 'react-native-swiper';

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;


export default class Home extends Component {


  render() {
    return (
      <View style={styles.container}>
        <View style={{height:50,width:WIDTH,backgroundColor:'#ff6100',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <TextInput
            placeholder="请输入商品"
            placeholderTextColor="#dcdcdc"
            underlineColorAndroid='transparent'
            style={{marginLeft:40,height: 37,padding:8,fontSize:14, borderRadius:19,backgroundColor:'#fff',width:WIDTH*0.7}}
          ></TextInput>
          <Image style={styles.saomiao} source={require("../../images/saomiao_03.png")} />
        </View>

        <ScrollView>
          <View style={styles.swiper}> 
            <Swiper style={styles.wrapper} height={180} horizontal={true} autoplay
              dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 8, height: 8, borderRadius: 4, marginLeft: 3}} />}
              activeDot={<View style={{backgroundColor: '#ff6100', width: 8, height: 8, borderRadius: 4, marginLeft: 3}} />}
            >
              <Image style={styles.image} source={require('../../images/lunbo.png')} />
              <Image style={styles.image} source={require('../../images/lunbo.png')} />
              <Image style={styles.image} source={require('../../images/lunbo.png')} />
            </Swiper>   
          </View>

          <View style={styles.main}>
            <Image style={styles.main01} source={require('../../images/home/main1.jpg')} />
            <Image style={styles.main02} source={require('../../images/home/main2.jpg')} />
          </View>
          <View style={styles.main}>
            <Image style={styles.main01} source={require('../../images/home/main1.jpg')} />
            <Image style={styles.main02} source={require('../../images/home/main2.jpg')} />
          </View>
          <View style={styles.main}>
            <Image style={styles.main01} source={require('../../images/home/main1.jpg')} />
            <Image style={styles.main02} source={require('../../images/home/main2.jpg')} />
          </View>
          <View style={styles.main}>
            <Image style={styles.main01} source={require('../../images/home/main1.jpg')} />
            <Image style={styles.main02} source={require('../../images/home/main2.jpg')} />
          </View>
          <View style={styles.main}>
            <Image style={styles.main01} source={require('../../images/home/main1.jpg')} />
            <Image style={styles.main02} source={require('../../images/home/main2.jpg')} />
          </View>
          <View style={styles.main}>
            <Image style={styles.main01} source={require('../../images/home/main1.jpg')} />
            <Image style={styles.main02} source={require('../../images/home/main2.jpg')} />
          </View>


        </ScrollView>
      </View>
    )
 
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    width:WIDTH
  },
  back:{
    height:49,
    backgroundColor:'#fff',
    paddingLeft:20,
    alignItems:'center',
    flexDirection:'row'
  },
  input:{
    height: 40,
    width:200,
    fontSize:12,
    color:'#dcdcdc',
    marginTop:5
  },
  swiper: {
    width:WIDTH,
    height:180,
    backgroundColor:'#f0f',
  },
  saomiao: {
    width: 30,
    height: 30,
    marginLeft:10
  },
  image: {
    width:WIDTH,
    flex: 1
  },
  main:{
    flexDirection:'row',
    height:100,
    width:WIDTH,
    backgroundColor:'#fff',
    top:0,
    justifyContent:'space-around',
    alignItems:'center'
  },
  main01:{
    height:98,
    width:WIDTH*0.49,
    top:0,
  },
  main02:{
    height:98,
    width:WIDTH*0.49,
    top:0,
  }
});
