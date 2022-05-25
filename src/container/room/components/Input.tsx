import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MESSAGE_TYPE} from '../helper';

type IProps = {
  onSend: (value: string) => void;
};

const Input: React.FC<IProps> = ({onSend}) => {
  const [value, setValue] = useState('');

  const onSendPress = () => {
    if (value) {
      onSend(value);
      setValue("")
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="type message"
        onChangeText={setValue}
        style={styles.input}
        value={value}
      />
      <TouchableOpacity style={styles.sendButton} onPress={onSendPress}>
        <Icon name="md-send-sharp" size={28} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    marginEnd: 15,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  sendButton: {
    padding: 5,
  },
});

export default Input;
