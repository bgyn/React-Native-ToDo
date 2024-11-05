import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";

const CheckBox = ({ isChecked ,onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
      {isChecked ? (
        <Image source={require("../assets/check.png")} />
      ) : (
        <Image source={require("../assets/radio.png")} />
      )}
    </View>
    </Pressable>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {},
});
