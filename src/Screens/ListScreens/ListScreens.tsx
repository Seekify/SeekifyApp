import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { UserContext } from '../../Context/UserContext';

const ListScreens = () => {

  const {signOutUser} = useContext(UserContext)

  return (
    <View>
      <Text>List Screens</Text>
      <TouchableOpacity onPress={() => {signOutUser()}}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ListScreens
