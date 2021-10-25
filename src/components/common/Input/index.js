import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import colors from "../../../assets/theme/colors";

const Input = ({
  onChangeText,
  style,
  value,
  placeholder,
  label,
  icon,
  iconPosition,
  error,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === "left") {
        return "row";
      } else if (iconPosition === "right") {
        return "row-reverse";
      }
    }
  };
  const getBorderColor = () => {
    if (focused) {
      return colors.primary;
    }

    if (error) {
      return colors.danger;
    } else {
      return colors.grey;
    }
  };

  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}

      <View
        style={[
          styles.wrapper,
          { alignItems: icon ? "center" : "baseline" },
          { borderColor: getBorderColor(), flexDirection: getFlexDirection() },
        ]}
      >
        <View>{icon && icon}</View>
        <TextInput
          style={[styles.textInput, style]}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          //   set focus color
          onFocus={() => {
            setFocused(true);
          }}
          //   reset focus color
          onBlur={() => {
            setFocused(false);
          }}
          {...props}
        />
      </View>

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  wrapper: {
    height: 42,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 5,
    marginTop: 5,
  },
  inputContainer: {
    paddingVertical: 12,
  },
  textInput: {
    flex: 1,
  },
  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,
  },
});
