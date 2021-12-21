import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomButton from './CustomButton';

const SignButtons = ({isSignup, onSubmit, loading}) => {
  const navigation = useNavigation();

  const primaryTitle = isSignup ? '회원가입' : '로그인';
  const secondaryTitle = isSignup ? '로그인' : '회원가입';

  const onSecondaryButtonPress = () => {
    if (isSignup) {
      navigation.goBack();
    } else {
      navigation.push('Login', {isSignup: true});
    }
  };

  if (loading) {
    return (
      <View style={styles.spinnerWrapper}>
        <ActivityIndicator size={32} color="#6200ee" />
      </View>
    );
  }

  return (
    <View style={[styles.buttons, isSignup && styles.center]}>
      <CustomButton title={primaryTitle} hasMarginBottom onPress={onSubmit} />
      <CustomButton
        title={secondaryTitle}
        buttonTheme="secondary"
        onPress={onSecondaryButtonPress}
      />
      {isSignup || (
        <>
          <CustomButton
            title="(임시)로그인후 홈화면"
            onPress={() => {
              navigation.push('MainTab');
            }}
            buttonTheme="secondary"
          />
          <View style={styles.textContainer}>
            <CustomButton
              title="아이디/비밀번호 찾기"
              buttonTheme="secondary"
            />
            <CustomButton
              title="회원가입"
              buttonTheme="secondary"
              onPress={() => {
                navigation.push('Login', {isSignup: true});
              }}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default SignButtons;

const styles = StyleSheet.create({
  buttons: {
    marginTop: 64,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  spinnerWrapper: {
    marginTop: 64,
    height: 104,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
