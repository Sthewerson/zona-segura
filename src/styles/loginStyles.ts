import { StyleSheet } from 'react-native';

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#8B008B',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'white', // Adicionando fundo branco aos campos
  },
  loginButton: {
    height: 40,
    width: '100%',
    backgroundColor: 'black', // Alterando cor de fundo para preto
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, // Movendo o botão um pouco mais para baixo
  },
  loginButtonText: {
    color: 'white', // Alterando a cor do texto para branco
  },
  purpleContainer: {
    marginTop: 200,
    alignItems: 'center',
    backgroundColor: 'purple',
    borderRadius: 10,
    padding: 10,
    width: '100%', // Garantindo que o contêiner roxo ocupe toda a largura
    height: '50%', // Definindo a altura do contêiner roxo
  },
  signupText: {
    textAlign: 'center',
    color: 'white',
  },
  signupButton: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default loginStyles;
