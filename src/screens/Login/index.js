import React, { useState } from "react";
import { Text } from "react-native";
import Container from "../../components/common/container";
import Input from "../../components/common/Input";

const Login = () => {
  const [value, onChangeText] = useState("");
  return (
    <Container>
      <Input
        onChangeText={(text) => onChangeText(text)}
        value={value}
        placeholder="Enter your Username"
        label="Username"
        iconPosition="right"
        // error="This field is req"
      />
      <Input
        onChangeText={(text) => onChangeText(text)}
        value={value}
        placeholder="Enter your Password"
        label="Password"
        icon={<Text>A</Text>}
        iconPosition="right"
      />
    </Container>
  );
};

export default Login;
