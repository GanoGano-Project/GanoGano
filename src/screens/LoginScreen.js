import React, {useRef, useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {theme} from '../theme';
import BorderedInput from '../components/BorderedInput';
import CustomButton from '../components/CustomButton';

const LoginScreen = ({navigation, route}) => {
  const {isSignup} = route.params ?? {};
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    phoneConfirmNumber: '',
  });
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const phoneNumberRef = useRef();
  const phoneConfirmNumberRef = useRef();

  const createChangeTextHandler = name => value => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    Keyboard.dismiss();
    console.log(form);
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.select({android: undefined, ios: 'padding'})}
      keyboardVerticalOffset={Platform.select({ios: 0, android: 500})}>
      <SafeAreaView style={styles.fullscreen}>
        <Text style={styles.text}>가노가노</Text>
        <View style={styles.form}>
          <BorderedInput
            hasMarginBottom
            placeholder="이메일"
            value={form.email}
            onChangeText={createChangeTextHandler('email')}
            autoCapitalize="none"
            autoCorrect={false}
            autoCompleteType="email"
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <BorderedInput
            value={form.password}
            onChangeText={createChangeTextHandler('password')}
            hasMarginBottom
            placeholder="비밀번호"
            textContentType="oneTimeCode"
            secureTextEntry
            ref={passwordRef}
            returnKeyType={isSignup ? 'next' : 'done'}
            onSubmitEditing={() => {
              if (isSignup) {
                confirmPasswordRef.current.focus();
              }
            }}
          />
          {isSignup && (
            <BorderedInput
              placeholder="비밀번호 확인"
              textContentType="oneTimeCode"
              value={form.confirmPassword}
              onChangeText={createChangeTextHandler('confirmPassword')}
              secureTextEntry={true}
              ref={confirmPasswordRef}
              returnKeyType="next"
              onSubmitEditing={() => phoneNumberRef.current.focus()}
            />
          )}
          <View style={[styles.buttons, isSignup && styles.center]}>
            {isSignup ? (
              <>
                <View style={styles.phoneAuth}>
                  <View style={styles.phoneAuthLeft}>
                    <BorderedInput
                      value={form.phoneNumber}
                      onChangeText={createChangeTextHandler('phoneNumber')}
                      hasMarginBottom
                      placeholder="휴대전화"
                      ref={phoneNumberRef}
                      returnKeyType="done"
                      keyboardType="phone-pad"
                    />
                  </View>
                  <View style={styles.phoneAuthRight}>
                    <CustomButton
                      title="인증요청"
                      onPress={() => {
                        phoneConfirmNumberRef.current.focus();
                      }}
                    />
                  </View>
                </View>
                <BorderedInput
                  hasMarginBottom
                  placeholder="인증번호"
                  vlaue={form.phoneConfirmNumber}
                  onChangeText={createChangeTextHandler('phoneConfirmNumber')}
                  ref={phoneConfirmNumberRef}
                  returnKeyType="done"
                  keyboardType="number-pad"
                />
                <CustomButton
                  title="회원가입"
                  hasMarginBottom
                  onPress={onSubmit}
                />
                <CustomButton
                  title="로그인"
                  onPress={() => {
                    navigation.goBack();
                  }}
                  buttonTheme="secondary"
                />
              </>
            ) : (
              <>
                <CustomButton title="로그인" onPress={onSubmit} />
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
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.background,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: theme.primary,
  },
  form: {
    marginTop: 64,
    width: '90%',
    paddingHorizontal: 16,
  },
  buttons: {
    marginTop: 64,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  center: {
    justifyContent: 'center',
  },
  phoneAuth: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  phoneAuthLeft: {
    flex: 3,
    marginRight: 16,
  },
  phoneAuthRight: {
    flex: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
});
