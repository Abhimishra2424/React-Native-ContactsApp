import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import colors from "../../../assets/theme/colors";
import { LOGIN } from "../../../constants/routeNames";
import Container from "../container";
import CustomButton from "../CustomButton";
import Input from "../Input";

const RegisterComponent = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Image
        height={70}
        width={70}
        style={styles.logoImage}
        source={require("../../../assets/images/logo.png")}
      />
      <View>
        <Text style={styles.title}>Welcome to RNCContacts </Text>
        <Text style={styles.subtitle}>New Register here </Text>
        <View style={styles.form}>
          <Input
            label="Username"
            placeholder="Enter your Name"
            iconPosition="right"
          />
          <Input
            label="First Name"
            placeholder="Enter your First Name"
            iconPosition="right"
          />
          <Input
            label="Last Name"
            placeholder="Enter your Last Name"
            iconPosition="right"
          />
          <Input
            label="Email"
            placeholder="Enter your Email"
            iconPosition="right"
          />
          <Input
            label="Password"
            placeholder="Enter your Password"
            iconPosition="right"
            secureTextEntry={true}
            icon={<Text>Show</Text>}
          />
        </View>
        <CustomButton primary title="Submit" />
        <View style={styles.createSection}>
          <Text style={styles.infoText}>Already have a an Account? </Text>
          <Button
            style={styles.linkBtn}
            onPress={() => navigation.navigate(LOGIN)}
          >
            LOGIN
          </Button>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;

const styles = StyleSheet.create({
  logoImage: {
    height: 150,
    width: 150,
    alignSelf: "center",
    marginTop: 50,
  },
  title: {
    fontSize: 21,
    textAlign: "center",
    paddingTop: 20,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 17,
    textAlign: "center",
    paddingVertical: 20,
    fontWeight: "500",
  },
  form: {
    paddingTop: 20,
  },
  createSection: {
    flexDirection: "row",
  },
  infoText: {
    fontSize: 17,
    paddingTop: 8,
  },
  linkBtn: {
    paddingLeft: 17,
    color: colors.primary,
    fontSize: 16,
  },
});
