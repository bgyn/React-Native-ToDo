import { StyleSheet, Text, View, TextInput, Pressable,Keyboard } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import React, { useState } from "react";
import { addTodo } from "../state/todo_slice";



const TextForm = () => {
  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = useState("");

  const inputHanlder = (value) => {
    if(value==""){
      return;
    }
      setTodoValue(value);
    
  };

  const addNewTodo = ()=>{
    dispatch(addTodo(todoValue))
    setTodoValue("");
    Keyboard.dismiss();
  }

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <TextInput
          value={todoValue}
          onChangeText={inputHanlder}
          placeholder="I want to do this"
          cursorColor={"black"}
          style = {styles.textInput}
        />
      </View>
      <Pressable onPress={addNewTodo}>
        <Ionicons name="add-circle" size={50} />
      </Pressable>
    </View>
  );
};

export default TextForm;

const styles = StyleSheet.create({
  root: {
    marginBottom: 20,
    flexDirection: "row",
    paddingHorizontal: 15,
    justifyContent : "center",
    alignItems : "center",
  },
  textInput : {
    paddingHorizontal : 8,
    height : 40,
    borderBottomWidth : 1,
    borderBottomColor : "grey"
  },
  container: {
    flex: 1,
  },
});
