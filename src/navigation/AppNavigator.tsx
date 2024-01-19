// AppNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Main: undefined;
  // Adicione outras rotas conforme necessário
};

export const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
