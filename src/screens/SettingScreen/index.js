import React from 'react';
import {StyleSheet, Text, View, Pressable, Platform, Image} from 'react-native';
import {theme} from '../../theme';
import SettingBlock from './SettingBlock';
import {useUserContext} from '../../contexts/UserContext';

const SettingScreen = () => {
  const {user} = useUserContext();

  const settings = [
    '개인정보 변경',
    '비밀번호 변경',
    '등급인증',
    '내가 쓴 글',
    '댓글 단 글',
    '로그아웃',
    '회원탈퇴',
  ];

  return (
    <View style={styles.background}>
      <View style={styles.profile}>
        <Image source={require('../../assets/user.png')} style={styles.image} />
        <View>
          <Text style={styles.job}>RN</Text>
          <Text style={styles.nickname}>{user.nickname} 님</Text>
        </View>
      </View>
      <View style={styles.settingBlocks}>
        {settings.map((setting, index) => {
          return <SettingBlock text={setting} key={index} />;
        })}
      </View>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: theme.background,
  },
  settingBlocks: {
    alignItems: 'center',
  },
  profile: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    margin: 16,
    marginLeft: 0,
  },
  image: {
    width: 64,
    height: 64,
    margin: 16,
    borderRadius: 8,
  },
  job: {
    color: theme.primary,
    fontSize: 12,
  },
  nickname: {
    color: theme.primary,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
