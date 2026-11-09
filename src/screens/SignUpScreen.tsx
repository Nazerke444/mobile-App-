import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';

type Props = {
  onLogin: () => void;
};

export default function SignUpScreen({
  onLogin,
}: Props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accepted, setAccepted] = useState(false);

  const handleSignUp = () => {

    if (!name || !email || !password || !confirmPassword) {
      alert('Барлық жолдарды толтырыңыз.');
    }

    else if (password !== confirmPassword) {
      alert('Құпиясөздер бірдей емес.');
    }

    else if (!accepted) {
      alert('Шарттармен келісу қажет.');
    }

    else {
      alert('Тіркелу сәтті орындалды!');
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >

      <Text style={styles.title}>
        Sign up
      </Text>

      <Text style={styles.subtitle}>
        Create an account to get started
      </Text>

      <Text style={styles.label}>Name</Text>

      <TextInput
        style={styles.input}
        placeholder="Your name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Email Address</Text>

      <TextInput
        style={styles.input}
        placeholder="name@email.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Password</Text>

      <TextInput
        style={styles.input}
        placeholder="Create a password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Text style={styles.label}>Confirm password</Text>

      <TextInput
        style={styles.input}
        placeholder="Confirm password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <Pressable
        style={styles.terms}
        onPress={() => setAccepted(!accepted)}
      >

        <View
          style={[
            styles.checkbox,
            accepted && styles.checked,
          ]}
        >
          {accepted && (
            <Text style={styles.checkmark}>✓</Text>
          )}
        </View>

        <Text style={styles.termsText}>
          I've read and agree with the Terms and
          Conditions and the Privacy Policy.
        </Text>

      </Pressable>

      <Pressable
        style={styles.button}
        onPress={handleSignUp}
      >
        <Text style={styles.buttonText}>
          Create account
        </Text>
      </Pressable>

      <Text style={styles.loginText}>
        Already have an account?{' '}
        <Text
          style={styles.link}
          onPress={onLogin}
        >
          Login
        </Text>
      </Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    padding: 26,
    paddingTop: 48,
    backgroundColor: '#FFFFFF',
  },

  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#151923',
  },

  subtitle: {
    fontSize: 13,
    color: '#858B98',
    marginTop: 7,
    marginBottom: 28,
  },

  label: {
    fontSize: 12,
    fontWeight: '700',
    color: '#303642',
    marginBottom: 7,
    marginTop: 8,
  },

  input: {
    height: 46,
    borderWidth: 1,
    borderColor: '#D9DDE5',
    borderRadius: 9,
    paddingHorizontal: 13,
    fontSize: 13,
  },

  terms: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 9,
    marginTop: 20,
    marginBottom: 22,
  },

  checkbox: {
    width: 17,
    height: 17,
    borderWidth: 1,
    borderColor: '#BFC5D0',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  checked: {
    backgroundColor: '#0875F9',
    borderColor: '#0875F9',
  },

  checkmark: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
  },

  termsText: {
    flex: 1,
    fontSize: 11,
    lineHeight: 17,
    color: '#858B98',
  },

  button: {
    height: 48,
    borderRadius: 9,
    backgroundColor: '#0875F9',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },

  loginText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#858B98',
    marginTop: 20,
  },

  link: {
    color: '#0875F9',
    fontWeight: '700',
  },

});