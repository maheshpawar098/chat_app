import {StackActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {H1, H2, H3, H4, H5, H6, Notes} from '../../../components';
import {ChatData} from '../../../mock';

type IProps = {
  item: {
    name: string;
    lastMsg: string;
    image: string;
    time: string;
    badge: string;
    id: number;
    status: string;
  };
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'online':
      return 'green';
    case 'offline':
      return 'tomato';
    default:
      return 'grey';
  }
};

const ChatRow: React.FC<IProps> = ({item}) => {
  const {badge, image, id, lastMsg, name, time, status} = item;
  const navigation = useNavigation();

  const onChatRoomPress = () => {
    const pushAction = StackActions.push('Room', {guest: item});

    navigation.dispatch(pushAction);
  };

  return (
    <View style={styles.container}>
      {/* {This left container which has profile image and online offline status, click navigation} */}
      <View style={styles.leftContainer}>
        <Image source={{uri: image}} style={styles.profilePic} />
        <View style={[styles.statusContainer]}>
          <View
            style={[styles.status, {backgroundColor: getStatusColor(status)}]}
          />
        </View>
      </View>
      {/* {This middle container which has person name and last message} */}
      <TouchableOpacity
        onPress={onChatRoomPress}
        style={styles.middleContainer}>
        <View style={styles.headingContainer}>
          <H4 bold>{name}</H4>
        </View>
        <View style={styles.lastMsgContainer}>
          <H6>{lastMsg}</H6>
        </View>
      </TouchableOpacity>
      {/* {This right container which has } */}
      <View style={styles.rightContainer}>
        <Notes>{time}</Notes>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  middleContainer: {
    flex: 1,
    paddingHorizontal: 10,
    // justifyContent: 'space-between'
  },
  headingContainer: {
    flex: 1,
  },
  lastMsgContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  rightContainer: {},
  leftContainer: {},
  statusContainer: {
    position: 'absolute',
    width: 18,
    height: 18,
    borderRadius: 9,
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  status: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});

export default ChatRow;
