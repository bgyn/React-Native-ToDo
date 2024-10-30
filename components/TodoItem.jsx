import { Pressable, StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

import React from 'react'
import CheckBox from './CheckBox'

const TodoItem = ({id,text,state}) => {
  return (
    <View style={styles.itemContainer}>
     <View style = {styles.leftContainer}>
       <CheckBox isChecked={state==="done" }/>
       <Text style={styles.todoText}>{text}</Text>
     </View>
     <View>
      <Pressable>
        <Ionicons name='trash' size={24}/>
      </Pressable>
     </View>
    </View>
  )
}

export default TodoItem

const styles = StyleSheet.create({
  itemContainer:{
    flex : 1,
    flexDirection : "row",
    paddingHorizontal : 15,
    marginBottom : 10,
    justifyContent : "space-between"
  },
  leftContainer:{
    flexDirection : 'row',
    alignItems : 'center',
  },
  todoText:{
    paddingHorizontal : 8,
    fontSize : 18,
  },
 
})