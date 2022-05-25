import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {H4} from '../../../components';

type IProps = {
  messages: any[];
};

const Messages: React.FC<IProps> = ({messages}) => {
  const renderMessages = ({item}: any) => {
      console.log(item);
      
    return <H4>{item.message}</H4>;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        inverted
        keyExtractor={item => item.datetime}
        renderItem={renderMessages}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
});

export default Messages;
