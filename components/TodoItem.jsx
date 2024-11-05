import { Pressable, StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {  useDispatch } from "react-redux";
import React from 'react'
import CheckBox from './CheckBox'
import { deleteTodo ,changeTodoState} from "../state/todo_slice";

const TodoItem = ({id,text,state}) => {
  const dispatch = useDispatch()

  const handleDeleteTodo=()=> {
    dispatch(deleteTodo(id))
  }

  const handleStateChange=()=>{
    dispatch(changeTodoState(id))
  }

  return (
    <View style={styles.itemContainer}>
     <View style = {styles.leftContainer}>
       <CheckBox isChecked={state==="done" } onPress={handleStateChange} />
       <Text style={[styles.todoText , state==="done" ? styles.completedText : null]}>{text}</Text>
     </View>
     <View>
      <Pressable onPress={handleDeleteTodo}>
        <Ionicons name='trash' size={24} color={state==="done" ? 'grey': null}/>
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
  completedText: {
    textDecorationLine : 'line-through',
    color : 'grey',
  }
 
})