import React from 'react';
import {StyleSheet, Text, TextProps, View, ViewProps} from 'react-native';

type IProps = {
  containerStyle?: ViewProps;
  textStyle?: TextProps;
  count?: string | number;
  position?: 'TOP' | 'BOTTOM';
};

const Badge: React.FC<IProps> = ({
  containerStyle,
  textStyle,
  children,
  count,
  position = 'TOP',
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {children}
      <View
        style={[
          position === 'TOP' ? styles.topContainer : styles.buttonContainer,
          styles.countContainer,
        ]}>
        <Text style={[styles.count, textStyle]}>{count}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  count: {},
  countContainer: {
    position: "absolute"
  },
  topContainer: {},
  buttonContainer: {},
});

export default Badge;
