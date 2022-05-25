import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Container, H1} from '../../components';
import {ChatData} from '../../mock';
import {ChatRow} from './components';
import ChatsHeader from './components/ChatsHeader';

type ChatItem = {
  name: string;
  lastMsg: string;
  image: string;
  time: string;
  badge: string;
  id: number;
  status: string;
};

const Chats = () => {
  // const [users]

  const renderItem = ({item}: {item: ChatItem}) => {
    return <ChatRow item={item} />;
  };
  

  return (
    <Container style={styles.container}>
      <ChatsHeader />
      <FlatList
        data={ChatData}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {},
  headerContainer: {
    padding: 10,
  },
});

export default Chats;
