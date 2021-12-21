import React from 'react';
import {StyleSheet, Text, View, Pressable, Platform} from 'react-native';
import {theme} from '../theme';

const SettingBlock = ({text}) => {
  return (
    <View style={styles.block}>
      <Pressable
        onPress={() => {}}
        style={({pressed}) => [
          styles.wrapper,
          Platform.OS === 'ios' && pressed && {opacity: 0.5},
        ]}
        android_ripple={{
          color: '#ffffff',
        }}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
      <View style={styles.grayLine} />
    </View>
  );
};

export default SettingBlock;

const styles = StyleSheet.create({
  block: {
    width: '100%',
    padding: 16,
    paddingTop: 0,
  },
  text: {
    color: theme.primary,
    fontWeight: 'bold',
    fontSize: 20,
  },
  grayLine: {
    borderBottomColor: theme.grayLine,
    borderBottomWidth: 1,
    marginTop: 12,
  },
});
