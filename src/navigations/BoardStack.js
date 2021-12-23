import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BoardScreen from '../screens/BoardScreen';
import NoticeList from '../components/NoticeList';
import WriteBoard from '../components/WriteBoard';
const Stack = createNativeStackNavigator();

export default  BoardStack = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name = "BoardScreen" component={BoardScreen} options={{headerShown:false}}/>
            <Stack.Screen name = 'NoticeList' component={NoticeList} options={{headerShown:false}}/>
            <Stack.Screen name = 'WriteBoard' component={WriteBoard} options={{headerShown:false}}/>

        </Stack.Navigator>
    )
}