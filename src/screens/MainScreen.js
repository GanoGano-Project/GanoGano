import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useUserContext} from '../contexts/UserContext';

const MainScreen = () => {
  const {user} = useUserContext();
  return (
    <View>
      <Text>Hello, {user.nickname}</Text>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
