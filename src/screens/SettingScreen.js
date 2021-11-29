import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomButton from '../components/CustomButton';

const SettingScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <CustomButton
        title="로그인"
        buttonTheme="secondary"
        onPress={() => {
          navigation.push('Login');
        }}
      />
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
