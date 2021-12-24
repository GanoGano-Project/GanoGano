import React, {useRef, useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {theme} from '../../theme';
import {signUp, signIn} from '../../lib/auth';
import SignForm from './SignForm';
import SignButtons from './SignButtons';
import {createUser, getUser} from '../../lib/users';
import {useNavigation} from '@react-navigation/native';
import {useUserContext} from '../../contexts/UserContext';

const LoginScreen = ({navigation, route}) => {
  const {isSignup} = route.params || {};
  const [form, setForm] = useState({
    email: '',
    password: '',
    nickname: '',
    confirmPassword: '',
    phoneNumber: '',
    phoneNumberConfirm: '',
  });
  const [loading, setLoading] = useState();
  const {setUser} = useUserContext();

  const createChangeTextHandler = name => value => {
    setForm({...form, [name]: value});
  };

  const onSubmit = async () => {
    Keyboard.dismiss();
    const {email, password, confirmPassword} = form;
    const info = {email, password};

    if (isSignup && password !== confirmPassword) {
      Alert.alert('실패', '비밀번호가 일치하지 않습니다.');
      return;
    }
    setLoading(true);
    try {
      const {user} = isSignup ? await signUp(info) : await signIn(info);
      const profile = await getUser(user.uid);
      if (!profile) {
        const userInfo = {
          id: user.uid,
          nickname: form.nickname,
          photoURL: null,
          phoneNumber: form.phoneNumber,
        };
        createUser(userInfo);
        setUser(userInfo);
        Alert.alert('확인', '회원가입에 성공하였습니다.');
      } else {
        setUser(profile);
      }
    } catch (e) {
      const messages = {
        'auth/email-already-in-use': '이미 가입된 이메일입니다.',
        'auth/wrong-password': '잘못된 비밀번호입니다.',
        'auth/user-not-found': '존재하지 않는 계정입니다.',
        'auth/invalid-email': '유효하지 않는 이메일 주소입니다.',
      };
      const msg = messages[e.code] || `${isSignup ? '가입' : '로그인'} 실패`;
      Alert.alert('실패', msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.select({android: undefined, ios: 'padding'})}
      keyboardVerticalOffset={Platform.select({ios: 0, android: 500})}>
      <SafeAreaView style={styles.fullscreen}>
        <Text style={styles.text}>가노가노</Text>
        <View style={styles.form}>
          <SignForm
            isSignup={isSignup}
            onSubmit={onSubmit}
            form={form}
            createChangeTextHandler={createChangeTextHandler}
          />
          <SignButtons
            isSignup={isSignup}
            onSubmit={onSubmit}
            loading={loading}
          />
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
  keyboardAvoidingView: {
    flex: 1,
  },
});
