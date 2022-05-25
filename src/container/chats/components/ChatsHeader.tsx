import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { H1 } from '../../../components'
import Icon from 'react-native-vector-icons/Ionicons'
import { StackActions, useNavigation } from '@react-navigation/native'

const ChatsHeader = () => {
    const navigation = useNavigation()

    const onSearchPress = () => {
        const pushAction = StackActions.push('Search');

        navigation.dispatch(pushAction)
    }

  return (
      <View style={styles.container}>
        <H1 bold>Chats</H1>
        <TouchableOpacity onPress={onSearchPress} style={styles.searchContainer}>
        <Icon name='md-search'  size={28} />
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 10,
        paddingVertical: 10,
        alignItems: 'center'
    },
    searchContainer: {
        paddingHorizontal: 10,
        paddingVertical: 5
    }
})



export default ChatsHeader