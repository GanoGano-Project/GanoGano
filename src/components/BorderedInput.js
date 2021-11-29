import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {theme} from '../theme';

const BorderedInput = ({hasMarginBottom, ...rest}, ref) => {
  return (
    <TextInput
      style={[styles.input, hasMarginBottom && styles.margin]}
      ref={ref}
      {...rest}
    />
  );
};

export default React.forwardRef(BorderedInput);

const styles = StyleSheet.create({
  input: {
    borderColor: theme.primary,
    borderWidth: 1,
    paddingHorizontal: 16,
    borderRadius: 4,
    height: 48,
    backgroundColor: theme.inputBackground,
  },
  margin: {
    marginBottom: 16,
  },
});
