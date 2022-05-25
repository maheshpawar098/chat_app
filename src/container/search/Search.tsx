import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Container, H2} from '../../components';
import api from '../../service';
import UserRow from './components/UserRow';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Search = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [search, setSearch] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const {data} = await api.user.getUsers();
    setUsers(data);
  };

  const onGoBackPress = () => {
    navigation.goBack();
  };

  const renderItem = ({item, index}: {item: UserType; index: number}) => {
    return <UserRow item={item} />;
  };

  return (
    <Container style={{flex: 1}}>
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={onGoBackPress}>
          <Icon name="arrow-back" size={28} />
        </TouchableOpacity>
        <TextInput
          onChangeText={setSearch}
          value={search}
          placeholder="Search name / username"
          style={styles.input}
        />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={getFilterData(users, search)}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
        />
      </View>
    </Container>
  );
};

const getFilterData = (data: UserType[], search: string) => {
  if(!search) return data
  return data.filter(item => {
    const name = item.name.toLowerCase();
    const username = item.username.toLowerCase();
    search = search.toLowerCase();
    return name.includes(search) || username.includes(search);
  });
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    flex: 1,
    marginStart: 15,
  },
  inputContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    // backgroundColor: 'red',
    // height: "100%"
  },
});

export default Search;

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
