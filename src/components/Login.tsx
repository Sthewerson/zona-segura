// src/components/LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';


type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type LoginScreenProps = {
  navigation: LoginScreenNavigationProp;
}
  const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [cpf, setCPF] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Fazer a requisição para a API de autenticação
      const response = await fetch('sua_url_de_autenticacao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cpf,
          password,
        }),
      });

      if (response.ok) {
        // Autenticação bem-sucedida
        //navigation.navigate('Home'); // Substitua 'Home' pela tela que você deseja exibir após o login
      } else {
        // Lidar com falha na autenticação
        console.error('Falha na autenticação:', response.status);
      }
    } catch (error) {
      console.error('Erro ao tentar autenticar:', error);
    }
  };

  const navigateToSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      

      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCPF}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Login" onPress={handleLogin} />

      <View style={styles.signupContainer}>
        <Text>Não possui cadastro?</Text>
        <TouchableOpacity onPress={navigateToSignUp}>
          <Text style={styles.signupButton}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  signupContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  signupButton: {
    marginLeft: 5,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
