import {useRoute} from '@react-navigation/native';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {FlatList, StyleSheet, TextInput, View} from 'react-native';
import {Container, H4} from '../../components';
import {Input} from './components';
import Messages from './components/Messages';
import {CONNECTED_STATUS, CONNECTION_TYPE, MESSAGE_TYPE} from './helper';

const getSocketUrl = (user1: string, user2: string) => {
  let channel_name = '';
  user1 = user1.replace(/\s+/g, '');
  user2 = user2.replace(/\s+/g, '');

  if (user1.localeCompare(user2)) {
    channel_name = `${user1}_${user2}`;
  } else {
    channel_name = `${user2}_${user1}`;
  }

  return `wss://demo.piesocket.com/v3/${channel_name}?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV`;
};

const Room: React.FC<any> = () => {
  const {
    params: {guest},
  } = useRoute<any>();
  const ws = useRef<WebSocket>();
  const [messages, setMessages] = useState<any[]>([]);
  // const userId = useMemo

  const startConnection = () => {
    ws.current = new WebSocket(getSocketUrl(guest.name, 'Mahesh'));
    ws.current.onopen = () => {
      const data: any = {
        type: CONNECTION_TYPE,
        guestUser: guest.name,
        status: CONNECTED_STATUS,
      };
      // connection opened
      console.log('Connect Started', guest.name);

      ws.current?.send(JSON.stringify(data)); // send a message
    };

    ws.current.onmessage = e => {
      // a message was received
      console.log(e.data);
      const data = JSON.parse(e.data);
      if (data.type === MESSAGE_TYPE) {
        setMessages(msgs => {
          msgs.push(data);
          return [...msgs];
        });
      }
    };

    ws.current.onerror = e => {
      console.log('Error => ', e.message);

      // an error occurred
      console.log(e.message);
    };

    ws.current.onclose = e => {
      // connection closed
      console.log(e.code, e.reason);
    };
  };

  const addEventListener = () => {

  }

  const onSend = (value: string) => {
    const data: any = {
      message: value,
      datetime: new Date().toISOString(),
      id: Math.random(),
      userId: 'Mahesh',
      type: MESSAGE_TYPE,
    };
    // console.log('data => ', data);

    ws.current?.send(JSON.stringify(data));
  };

  useEffect(() => {
    startConnection();
    return () => {
      ws.current?.close()
    };
  }, []);

  return (
    <Container style={styles.container}>
      <Messages
        messages={messages}
      />
      <Input onSend={onSend} />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    flex: 1
  }
})

export default Room;
