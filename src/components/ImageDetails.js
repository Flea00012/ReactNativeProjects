import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetails = ({ imageSource, title, imageScore }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text> {title} </Text>
      <Text style={styles.images}>Image score - {imageScore} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  images: {
    padding: 10,
  },
});

export default ImageDetails;
