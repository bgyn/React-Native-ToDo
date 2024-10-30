import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const CheckBox = ({ isChecked }) => {
  return (
    <View style={styles.container}>
      {isChecked ? (
        <Image source={require("../assets/check.png")} />
      ) : (
        <Image source={require("../assets/radio.png")} />
      )}
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {},
});
