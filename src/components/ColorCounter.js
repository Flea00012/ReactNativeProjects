import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Button
        title={`Increase ${color}`}
        onPress={() => {
          onIncrease();
        }}
      />
      <Button
        title={`Decrease ${color}`}
        onPress={() => {
          onDecrease();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
