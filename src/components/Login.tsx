import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import loginStyles from '../styles/loginStyles';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type LoginScreenProps = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [cpf, setCPF] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (cpf === '86465640457' && password === '12345678') {
      navigation.replace('Main');
    } else {
      console.error('Credenciais inválidas');
    }
  };

  const navigateToSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={loginStyles.container}>
      <View style={loginStyles.purpleContainer}>
        <TextInput
          style={loginStyles.input}
          placeholder="CPF"
          value={cpf}
          onChangeText={setCPF}
        />
        <TextInput
          style={loginStyles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
       
        <TouchableOpacity style={loginStyles.loginButton} onPress={handleLogin}>
          <Text style={loginStyles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <Text style={loginStyles.signupText}>Não possui cadastro?</Text>
        <TouchableOpacity onPress={navigateToSignUp}>
          <Text style={[loginStyles.signupText, loginStyles.signupButton]}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
