import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: "20" },
    { name: "Friend #2", age: "22" },
    { name: "Friend #3", age: "24" },
    { name: "Friend #4", age: "26" },
    { name: "Friend #5", age: "28" },
    { name: "Friend #6", age: "30" },
    { name: "Friend #7", age: "32" },
    { name: "Friend #8", age: "34" },
  ];

  return (
    <FlatList
      //horizontal={true}
      //showsHorizontalScrollIndicator={false}

      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.listStyle}>
            my friend: {item.name} is {item.age} years old
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  listStyle: {
    fontSize: 15,
    marginVertical: 15,
  },
});

export default ListScreen;
