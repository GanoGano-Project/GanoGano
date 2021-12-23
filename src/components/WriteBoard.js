import React ,{useState}from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View,FlatList, TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../theme';

const header = ()=>{
        return(
        <View style = {styles.header}>
            <View style={{flex:1,left:'15%'}}>
            <TouchableOpacity>
                <Text style={styles.headersidetext}>취소</Text>
            </TouchableOpacity>
            </View>
            <View style={{flex:2,left:'15%'}}>
            <Text style={styles.headertext}>글작성하기</Text>
            </View>
            <View style = {{flex:1,left:'15%'}}>
            <TouchableOpacity>
                <Text style={styles.headersidetext}>등록</Text>
            </TouchableOpacity>
            </View>
            
        </View>
        )
    
    
}
const WriteBoard = ()=>{
    const [title,setTitle] = useState('');
    const [contents,setContents] = useState('');
    return(
        <SafeAreaView style = {styles.safearea}>
            {header()}
           <View style={styles.titleview}>
                <View style = {{flex:0.1}}>
                    <TextInput 
                            placeholder='제목'
                            style={{fontSize:20,height:'70%'}}
                            onChangeText = {(text)=>setTitle(text)}
                    />
                </View>
                <View style = {styles.contentview}>
                    <TextInput 
                            placeholder='본문'
                            style={{fontSize:16}}
                            onChangeText = {(text)=>setContents(text)}
                            multiline={true}
                            maxLength={80}
                            
                    />
                </View>
           </View>
        </SafeAreaView>
    )

}
export default WriteBoard;

styles= StyleSheet.create({
    safearea:{
        flex:1,
        backgroundColor:'white',
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        height:80,
        backgroundColor:'white',
        borderBottomColor:'gray',
        borderBottomWidth:1,
        width:'87%',
        left:'4%'

    },
    headertext:{
        color:theme.primary,
        fontSize:30,
        fontWeight:'bold'

    },
    headersidetext:{
        color:theme.primary,
        fontSize:20
    },
    titleview:{

        flex:1,
        left:'10%'
    },
    contentview:{
        felx:0.9,
        width:'80%'

    }

})
