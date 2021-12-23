import React ,{useState}from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View,FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../theme';
import ActionButton from 'react-native-action-button';
const NoticeList = ({route,navigation})=>{
    const {Noticename} = route.params;

    const [Noticearray,SetNoticearray]= useState([
            {id:1,title:'제목1',content:'한줄 글 남기는 중',time:'2:41',nickname:'익명'},
            {id:2,title:'제목2',content:'한줄 글 남기는 중',time:'2:41',nickname:'익명'},
            {id:3,title:'제목3',content:'한줄 글 남기는 중',time:'2:41',nickname:'익명'},
            {id:4,title:'제목4',content:'한줄 글 남기는 중',time:'2:41',nickname:'익명'},
            {id:5,title:'제목5',content:'한줄 글 남기는 중',time:'22:41',nickname:'익명'},
            {id:6,title:'제목5',content:'한줄 글 남기는 중',time:'22:41',nickname:'익명'},
            {id:7,title:'제목5',content:'한줄 글 남기는 중',time:'22:41',nickname:'익명'},
            
             ]);

    // const header = ()=>{
    //     <View style = {{felx:1,backgroundColor:'yellow'}}>
    //         <Text>{Noticename}</Text>
    //     </View>
    // }
    const renderItem = ({item})=>(
        
        <TouchableOpacity style={styles.contentstyle} >
                  <Text style={styles.noticetitle} >{item.title}</Text>
                  <Text style ={styles.noticecontent}numberOfLines={1}>{item.content}</Text>
                  <View style={{flexDirection:'row'}}>
                      <View style = {styles.noticetime}>
                      <Text >{item.time}</Text>
                      </View>
                      <View style ={{margin:4}}>
                      <Text>{item.nickname}</Text>
                      </View>
                  </View>
        </TouchableOpacity>
        
    );

    return(
        <SafeAreaView style = {styles.safearea}>
            <View style={{flex:1,alignItems:'center'}}>
            <View style = {styles.header}>
            <Text style = {styles.headertext}>{Noticename}</Text>
            </View>
            <FlatList
                data = {Noticearray}
                renderItem = {renderItem}
                ketExtractor = {(item)=> item.id}
                style ={{flex:9}}
           /> 
           <View style={styles.writebutton}>
               <ActionButton 
                size={55} buttonColor={theme.primary} 
                onPress={()=>navigation.navigate('WriteBoard')}
               />
           </View>
           </View>


        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    safearea:{
      flex:1,
      backgroundColor:'white',
      alignItems:'center'
  
    },
    contentstyle:{
        
        width:340,
        borderBottomColor:'gray',
        borderBottomWidth:1,
        margin:10
       

    },
    noticetitle:{
        fontSize:20,
        fontWeight:'bold'

    },
    noticecontent:{
        fontSize:15,
        left:'5%',
        margin:5

    },
    noticetime:{
        borderRightColor:'gray',
        borderRightWidth:1,
        width:40,
        margin:4

    },
    headertext:{
        color:theme.primary,
        fontSize:30,
        fontWeight:'bold',
        margin:10

    },
    header:{
        felx:1,
        alignItems:'center',
        margin:10

    },
    writebutton:{
        // backgroundColor:theme.primary,
        // width:'100%',
        // height:'100%',
        // borderRadius:10,
        // alignItems:'center'
        
        position:'absolute',
        top:'85%',
        left:'70%',
        width:45,
        height:45,
        borderRadius:20,
        alignItems:'center',

    },
    

})
export default NoticeList;