import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Input, Button } from 'react-native-elements';

const SignUpScreen = () => {
  const [email, setEmail] = useState('Email Address');
  const [password, setPassword] = useState('Password');

  const handleSignUp = () => {
    // Handle sign up logic here
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'src\assets\shape.png' }}
        style={styles.image}
      />
      <View style={styles.formContainer}>
        <Input
          placeholder="Email address"
          leftIcon={{ type: 'font-awesome', name: 'envelope-o' }}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Input
          placeholder="Password"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Button
          title="Sign Up"
          onPress={handleSignUp}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  formContainer: {
    width: '100%',
  },
});

export default SignUpScreen;