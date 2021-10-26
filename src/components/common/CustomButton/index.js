import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../../assets/theme/colors";

const CustomButton = ({
  title,
  loading,
  disabled,
  primary,
  secondary,
  danger,
  onPress,
  ...props
}) => {
  const getBgColor = () => {
    if (disabled) {
      return colors.grey;
    }
    if (primary) {
      return colors.primary;
    }
    if (secondary) {
      return colors.secondary;
    }
    if (danger) {
      return colors.danger;
    }
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.wrapper, { backgroundColor: getBgColor() }]}
    >
      <View style={[styles.loaderSection]}>
        {loading && <ActivityIndicator />}
      </View>
      {title && (
        <Text style={{ color: disabled ? "black" : colors.white }}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  wrapper: {
    height: 42,
    paddingHorizontal: 5,
    marginVertical: 5,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  loaderSection: {
    flexDirection: "row",
  },
});
