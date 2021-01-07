import React from "react";

import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
  const greeting = <Text style={styles.greetStyle}>My name is </Text>;
  const name = <Text style={styles.name}>Lee Fowler</Text>;

  return (
    <View>
      <Text style={styles.welcomeStyle}>Getting started with React Native</Text>
      {greeting}
      {name}
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeStyle: {
    fontSize: 30,
  },
  greetStyle: {
    fontSize: 15,
  },
  nameStyle: {
    fontSize: 20,
  },
});

export default ComponentScreen;
