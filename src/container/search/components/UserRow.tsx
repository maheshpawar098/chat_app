import { StackActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {H2, H3, H4, H5} from '../../../components';

const UserRow = ({item}: {item: UserType}) => {

  const navigation = useNavigation()

  const onChatRoomPress = () => {
    const pushAction = StackActions.push('Room', {guest: item});

    navigation.dispatch(pushAction);
  };


  return (
    <TouchableOpacity onPress={onChatRoomPress} style={styles.container}>
      <H3>{item.username}</H3>
      <H5>{item.name}</H5>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default UserRow;

type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
