import React from 'react';
import {StyleSheet, Text as RNText, TextProps} from 'react-native';

type Props = {
  bold?: any;
};

const Notes: React.FC<Props & TextProps> = ({children, bold, ...props}) => {
  return (
    <RNText style={[bold && styles.bold, styles.main]} {...props}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  main: {
    fontSize: 12,
  },
  bold: {
    fontWeight: '600',
  },
});

export default Notes;
