import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  ToolbarAndroid,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>lee loves Josefin Vestman Fowler</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to components demo"
        style={styles.button}
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to lists demo"
      />
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go to images demo"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to counter demo"
      />
      <Button
        onPress={() => navigation.navigate("Color")}
        title="Go to color demo"
      />
      <Button
        onPress={() => navigation.navigate("Square")}
        title="Go to square demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  button: {
    padding: 10,
    marginVertical: 10,
  },
});

export default HomeScreen;
