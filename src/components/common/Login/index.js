import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
import colors from "../../../assets/theme/colors";
import { REGISTER } from "../../../constants/routeNames";
import Container from "../container";
import CustomButton from "../CustomButton";
import Input from "../Input";

const LoginComponent = () => {
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
        <Text style={styles.subtitle}>Please login here </Text>
        <View style={styles.form}>
          <Input
            label="Username"
            placeholder="Enter your Name"
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
          <Text style={styles.infoText}>Need a new Account? </Text>
          <Button
            style={styles.linkBtn}
            onPress={() => navigation.navigate(REGISTER)}
          >
            Register
          </Button>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;

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
