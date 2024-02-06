import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import { UserService } from "../services/userService";

type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "SignUp"
>;

type SignUpScreenProps = {
  navigation: SignUpScreenNavigationProp;
};

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [cpf, setCPF] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDOB] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (inputEmail: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(emailRegex.test(inputEmail) ? "" : "Email inválido");
  };

  const handleSignUp = async () => {
    const userService = new UserService();
    if (emailError) {
      // Se houver um erro de e-mail, não prossiga com o cadastro
      return;
    }

    try {
      const response = await userService.register({
        name: fullName,
        cpf: cpf,
        email: email,
        password: password,
        birthday: new Date(dob),
      });
      console.log(response);
      if (!response) {
        console.log("erro ao criar conta, tente novamente");
      }
    } catch (error) {
      console.log("Erro ao criar conta:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crie sua conta</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        value={fullName}
        onChangeText={setFullName}
      />

      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCPF}
      />

      <View style={styles.emailContainer}>
        <TextInput
          style={[styles.input, emailError ? styles.errorInput : null]}
          placeholder="Email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setEmailError("");
          }}
          onBlur={() => validateEmail(email)}
        />
        {emailError ? (
          <Text style={styles.errorMessage}>{emailError}</Text>
        ) : null}
      </View>

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
        value={dob}
        onChangeText={setDOB}
      />

      <Button title="Criar Conta" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  emailContainer: {
    position: "relative",
    width: "100%",
  },
  errorInput: {
    borderColor: "red",
  },
  errorMessage: {
    color: "red",
    position: "absolute",
    bottom: -20,
  },
});

export default SignUpScreen;
