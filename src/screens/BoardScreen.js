import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Now = [
    '일상/공감 게시판','고충게시판','일상/실습게시판','번개 모임','자유게시판'
  
  ];
const future = [
    '국시게시판','면접/서류 게시판','진로상담','병원후기','시험 준비 게시판',
  
  ];

const BoardScreen = ({navigation}) => {
  const noticeBoard = (array) =>{
    return (
        <View>
            
              {array.map(noticename=> <TouchableOpacity style={styles.noticebutton} onPress={()=>navigation.navigate('NoticeList',{Noticename:noticename})}>  
                                        <Text style={styles.contenttitle}>{noticename}</Text> 
                                      </TouchableOpacity>)}
            
        </View>
     
  
    );
  };
  return (
    
    <SafeAreaView style={styles.safearea}>
      <ScrollView style = {{flex:1}}>
      <View>
        <Text style={styles.titletext}>지금 우리들은</Text>
      </View>
      <View style = {[styles.noticeboard,{height:340}]}>
        {noticeBoard(Now)}
      </View>
      <View>
        <Text style={styles.titletext}>앞으로 우리들은</Text>
      </View>
      <View style = {[styles.noticeboard,{height:340}]}>
        {noticeBoard(future)}
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BoardScreen;

const styles = StyleSheet.create({
  safearea:{
    flex:1,
    backgroundColor:'white',
    alignItems:'center'

  },
  noticeboard:{
    width:320,
    
    borderRadius:10,
    backgroundColor:'#571C73',
    alignItems:'flex-start',
    margin:10
  },
  titletext:{
    fontSize:25,
    fontWeight:'bold',
    color:'#571C73'
  },
  contenttitle:{
    fontSize:20,
    fontWeight:'500',
    color:'white'
  },
  noticebutton:{
    margin:20,
  }
    
});
