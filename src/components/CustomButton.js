import React from 'react';
import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import {theme} from '../theme';

const CustomButton = ({onPress, title, hasMarginBottom, buttonTheme}) => {
  const isPrimary = buttonTheme === 'primary';

  return (
    <View style={[styles.block, hasMarginBottom && styles.margin]}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => [
          styles.wrapper,
          isPrimary && styles.primaryWrapper,
          Platform.OS === 'ios' && pressed && {opacity: 0.5},
        ]}
        android_ripple={{
          color: isPrimary ? '#ffffff' : '#6200ee',
        }}>
        <Text
          style={[
            styles.text,
            isPrimary ? styles.primaryText : styles.secondaryText,
          ]}>
          {title}
        </Text>
      </Pressable>
    </View>
  );
};

CustomButton.defaultProps = {
  buttonTheme: 'primary',
};

export default CustomButton;

const styles = StyleSheet.create({
  overflow: {
    borderRadius: 4,
    overflow: 'hidden',
  },
  wrapper: {
    borderRadius: 4,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14,
    color: theme.inputText,
  },
  margin: {
    marginBottom: 8,
  },
  primaryWrapper: {
    backgroundColor: theme.primary,
  },
  primaryText: {
    color: theme.inputText,
  },
  secondaryText: {
    color: theme.primary,
  },
});
