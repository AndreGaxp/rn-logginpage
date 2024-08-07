import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <View style={style.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require("../../../assets/logo.png")}
          style={{ width: "100%" }}
          resizeMode="contain"
        />
      </View>

      <Animatable.View
        delay={500}
        animation="fadeInUp"
        style={style.containerForm}
      >
        <Text style={style.title}>
          Monitor, organize seus gastos de qualquer lugar!
        </Text>
        <Text style={style.text}>Faça o login para começar</Text>

        <TouchableOpacity
          style={style.button}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={style.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#38a59d",
  },

  containerLogo: {
    flex: 2,
    backgroundColor: "#38a59d",
    justifyContent: "center",
    alignContent: "center",
  },

  containerForm: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 28,
    marginBottom: 12,
  },

  text: {
    color: "#a1a1a1",
  },

  button: {
    position: "absolute",
    backgroundColor: "#38a69b",
    borderRadius: 50,
    paddingVertical: 12,
    width: "60%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    bottom: "15%",
  },

  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
