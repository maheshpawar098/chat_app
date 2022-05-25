import React from 'react';
import {SafeAreaView, StyleSheet, View, ViewProps} from 'react-native';

const Container: React.FC<ViewProps> = ({children, ...props}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View {...props}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'transparent'

  }
})

export default Container;
