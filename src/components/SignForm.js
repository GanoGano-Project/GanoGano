import React, {useRef} from 'react';
import BorderedInput from './BorderedInput';
import {StyleSheet, View} from 'react-native';
import CustomButton from './CustomButton';

const SignForm = ({isSignup, onSubmit, form, createChangeTextHandler}) => {
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const nicknameRef = useRef();
  const phoneNumberRef = useRef();
  const phoneConfirmNumberRef = useRef();
  return (
    <>
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
      {isSignup && (
        <View style={styles.phoneAuth}>
          <View style={styles.phoneAuthLeft}>
            <BorderedInput
              hasMarginBottom
              value={form.nickname}
              onChangeText={createChangeTextHandler('nickname')}
              placeholder="닉네임"
              ref={nicknameRef}
              returnKeyType="done"
            />
          </View>
          <View style={styles.phoneAuthRight}>
            <CustomButton
              title="중복확인"
              onPress={() => {
                passwordRef.current.focus();
              }}
            />
          </View>
        </View>
      )}
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
        <>
          <BorderedInput
            hasMarginBottom
            placeholder="비밀번호 확인"
            textContentType="oneTimeCode"
            value={form.confirmPassword}
            onChangeText={createChangeTextHandler('confirmPassword')}
            secureTextEntry={true}
            ref={confirmPasswordRef}
            returnKeyType="next"
            onSubmitEditing={() => phoneNumberRef.current.focus()}
          />
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
          <View style={styles.phoneAuth}>
            <View style={styles.phoneAuthLeft}>
              <BorderedInput
                hasMarginBottom
                placeholder="인증번호"
                vlaue={form.phoneConfirmNumber}
                onChangeText={createChangeTextHandler('phoneConfirmNumber')}
                ref={phoneConfirmNumberRef}
                returnKeyType="done"
                keyboardType="number-pad"
              />
            </View>
            <View style={styles.phoneAuthRight}>
              <CustomButton
                title="인증확인"
                onPress={() => {
                  //구현예정
                }}
              />
            </View>
          </View>
        </>
      )}
    </>
  );
};

export default SignForm;

const styles = StyleSheet.create({
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
