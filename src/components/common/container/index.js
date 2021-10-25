import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const Container = ({ children }) => {
  return (
    <ScrollView>
      <View style={styles.wrapper}>{children}</View>
    </ScrollView>
  );
};

export default Container;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
});