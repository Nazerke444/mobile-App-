import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
} from 'react-native';

type Props = {
  onSignUp: () => void;
  onForgotPassword: () => void;
};

export default function LoginScreen({
  onSignUp,
  onForgotPassword,
}: Props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>

      <View style={styles.imagePlaceholder}>
        <Text style={styles.imageIcon}>▧</Text>
      </View>

      <View style={styles.form}>

        <Text style={styles.title}>
          Welcome!
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Pressable onPress={onForgotPassword}>
          <Text style={styles.forgot}>
            Forgot password?
          </Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => alert('Login батырмасы басылды')}
        >
          <Text style={styles.buttonText}>
            Login
          </Text>
        </Pressable>

        <Text style={styles.registerText}>
          Not a member?{' '}
          <Text
            style={styles.link}
            onPress={onSignUp}
          >
            Register now
          </Text>
        </Text>

        <View style={styles.line} />

        <Text style={styles.or}>
          Or continue with
        </Text>

        <View style={styles.socials}>
          <Text style={[styles.social, { backgroundColor: '#E9364D' }]}>
            G
          </Text>

          <Text style={[styles.social, { backgroundColor: '#202126' }]}>
            ●
          </Text>

          <Text style={[styles.social, { backgroundColor: '#0875F9' }]}>
            f
          </Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  imagePlaceholder: {
    height: '34%',
    backgroundColor: '#EAF2FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginTop: 16,
  },

  imageIcon: {
    color: '#9CCFFF',
    fontSize: 34,
  },

  form: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 24,
  },

  title: {
    fontSize: 23,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 20,
  },

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#D9DDE5',
    borderRadius: 10,
    paddingHorizontal: 14,
    marginBottom: 10,
    fontSize: 13,
  },

  forgot: {
    color: '#0875F9',
    fontSize: 12,
    marginTop: 2,
    marginBottom: 18,
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

  registerText: {
    textAlign: 'center',
    color: '#858B98',
    fontSize: 12,
    marginTop: 16,
  },

  link: {
    color: '#0875F9',
    fontWeight: '700',
  },

  line: {
    height: 1,
    backgroundColor: '#E7EAF0',
    marginTop: 24,
  },

  or: {
    textAlign: 'center',
    color: '#858B98',
    fontSize: 12,
    marginTop: 16,
  },

  socials: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 14,
    marginTop: 14,
  },

  social: {
    width: 34,
    height: 34,
    borderRadius: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    textAlignVertical: 'center',
    overflow: 'hidden',
    fontWeight: '800',
    paddingTop: 8,
  },

});