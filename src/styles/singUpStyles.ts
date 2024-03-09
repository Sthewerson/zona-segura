// SignUpStyles.tsx
import { StyleSheet } from 'react-native';

export const signUpStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#8B008B', // Background color
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white', // Text color
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15, // Increased space between fields
    padding: 10,
    borderRadius: 10, // Rounded corners
    backgroundColor: 'white', // Input background color
  },
  emailContainer: {
    position: 'relative',
    width: '100%',
  },
  errorInput: {
    borderColor: 'red',
  },
  errorMessage: {
    color: 'red',
    position: 'absolute',
    bottom: -20,
  },
  button: {
    height: 40, // Same height as input fields
    width: '100%', // Full width
    backgroundColor: 'black', // Button background color
    borderRadius: 10, // Rounded corners
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white', // Button text color
  },
});
