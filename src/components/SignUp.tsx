// SignUpScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { signUpStyles } from '../styles/singUpStyles';

type SignUpScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

type SignUpScreenProps = {
  navigation: SignUpScreenNavigationProp;
};

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [cpf, setCPF] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDOB] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (inputEmail: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(emailRegex.test(inputEmail) ? '' : 'Email inválido');
  };

  const handleSignUp = async () => {
    if (emailError) {
      // Se houver um erro de e-mail, não prossiga com o cadastro
      return;
    }

    try {
      // Implemente a lógica para criar a conta aqui
    } catch (error) {
      console.error('Erro ao criar conta:', error);
    }
  };

  return (
    <View style={signUpStyles.container}>
      <Text style={signUpStyles.title}>Crie sua conta</Text>

      <TextInput
        style={signUpStyles.input}
        placeholder="Nome Completo"
        value={fullName}
        onChangeText={setFullName}
      />

      <TextInput
        style={signUpStyles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCPF}
      />

      <View style={signUpStyles.emailContainer}>
        <TextInput
          style={[signUpStyles.input, emailError ? signUpStyles.errorInput : null]}
          placeholder="Email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setEmailError('');
          }}
          onBlur={() => validateEmail(email)}
        />
        {emailError ? <Text style={signUpStyles.errorMessage}>{emailError}</Text> : null}
      </View>

      <TextInput
        style={signUpStyles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={signUpStyles.input}
        placeholder="Data de Nascimento"
        value={dob}
        onChangeText={setDOB}
      />

      <TouchableOpacity style={signUpStyles.button} onPress={handleSignUp}>
        <Text style={signUpStyles.buttonText}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;
