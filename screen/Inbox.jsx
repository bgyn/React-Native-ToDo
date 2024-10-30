import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  View,
  FlatList,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { StatusBar } from "expo-status-bar";
import TodoItem from "../components/TodoItem";

const Inbox = () => {
  const todo = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.pageTitle}>Inbox</Text>
      <View style={styles.listView}>
        <Text style={styles.listTitle}>To Do</Text>
        {todo.length !== 0 ? (
          <FlatList
            data={todo}
            renderItem={({ item }) => (
              <TodoItem {...item} keyExtractor={(item) => item.id} />
            )}
          />
        ) : (
          <Text style={styles.emptyText}>No to do tasks</Text>
        )}
      </View>
      <View style={styles.divider} />
      <View style={styles.listView}>
        <Text style={styles.listTitle}>Completed</Text>
        {todo.length !== 0 ? (
          <FlatList
            data={todo}
            renderItem={({ item }) => (
              <TodoItem {...item} keyExtractor={(item) => item.id} />
            )}
          />
        ) : (
          <Text style={styles.emptyText}>No completed task</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Inbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight || 24 : 0,
    backgroundColor: "#f7f8fa",
  },
  pageTitle: {
    marginBottom: 35,
    paddingHorizontal: 15,
    fontSize: 54,
    fontWeight: "600",
  },
  listView: {
    flex: 1,
  },
  listTitle: {
    fontSize: 34,
    marginBottom: 25,
    paddingHorizontal: 16,
  },
  emptyText: {
    paddingTop: 10,
    paddingHorizontal: 15,
    fontSize: 15,
    lineHeight: 20,
    paddingBottom: 15,
    color: "#737373",
  },
  divider: {
    width: "100%",
    height: 2,
    backgroundColor: "#000000",
  },
});
