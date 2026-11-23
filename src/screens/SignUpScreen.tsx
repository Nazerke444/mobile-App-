import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Button from '../components/button';

type Props = {
  onLogin: () => void;
};

export default function SignUpScreen({ onLogin }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const handleSignUp = () => {
    if (!name || !email || !password || !confirmPassword) {
      alert('Барлық жолдарды толтырыңыз.');
    } else if (password !== confirmPassword) {
      alert('Құпиясөздер бірдей емес.');
    } else if (!accepted) {
      alert('Шарттармен келісу қажет.');
    } else {
      alert('Тіркелу сәтті орындалды!');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Sign up</Text>
        <Text style={styles.subtitle}>Create an account to get started</Text>

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
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Create a password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPass}
          />
          <Pressable onPress={() => setShowPass(!showPass)}>
            <Text style={styles.eyeText}>{showPass ? '🙈' : '👁'}</Text>
          </Pressable>
        </View>

        <Text style={styles.label}>Confirm password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Confirm password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPass}
          />
          <Pressable onPress={() => setShowConfirmPass(!showConfirmPass)}>
            <Text style={styles.eyeText}>{showConfirmPass ? '🙈' : '👁'}</Text>
          </Pressable>
        </View>

        <Pressable
          style={styles.terms}
          onPress={() => setAccepted(!accepted)}
        >
          <View style={[styles.checkbox, accepted && styles.checked]}>
            {accepted && <Text style={styles.checkmark}>✓</Text>}
          </View>

          <Text style={styles.termsText}>
            I've read and agree with the{' '}
            <Text style={styles.link}>Terms and Conditions</Text> and the{' '}
            <Text style={styles.link}>Privacy Policy</Text>.
          </Text>
        </Pressable>

        <Button title="Create account" onPress={handleSignUp} />

        <Text style={styles.loginText}>
          Already have an account?{' '}
          <Text style={styles.link} onPress={onLogin}>
            Login
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flexGrow: 1,
    padding: 26,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#858B98',
    marginBottom: 22,
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
    color: '#202633',
    marginBottom: 6,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#D9DDE5',
    borderRadius: 10,
    paddingHorizontal: 14,
    marginBottom: 14,
    fontSize: 13,
  },
  passwordContainer: {
    height: 48,
    borderWidth: 1,
    borderColor: '#D9DDE5',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    marginBottom: 14,
  },
  passwordInput: {
    flex: 1,
    fontSize: 13,
  },
  eyeText: {
    fontSize: 14,
    color: '#858B98',
  },
  terms: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 6,
    marginBottom: 22,
    gap: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: '#D9DDE5',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
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
    fontSize: 12,
    color: '#858B98',
    lineHeight: 18,
  },
  link: {
    color: '#0875F9',
    fontWeight: '700',
  },
  loginText: {
    textAlign: 'center',
    color: '#858B98',
    fontSize: 12,
    marginTop: 18,
  },
});
