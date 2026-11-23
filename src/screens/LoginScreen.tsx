import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import Button from '../components/button';
import { api } from '../services/api';

type Props = {
  onSignUp: () => void;
  onForgotPassword: () => void;
  onLoginSuccess?: () => void;
};

export default function LoginScreen({
  onSignUp,
  onForgotPassword,
  onLoginSuccess,
}: Props) {
  const [email, setEmail] = useState('emilys');
  const [password, setPassword] = useState('emilyspass');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      alert('Email немесе құпиясөзді енгізіңіз.');
      return;
    }

    try {
      setLoading(true);
      const user = await api.login(email.trim(), password);
      alert(`Қош келдіңіз, ${user.firstName}!`);
      if (onLoginSuccess) {
        onLoginSuccess();
      }
    } catch (error: any) {
      alert(error.message || 'Кіру кезінде қате шықты');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imagePlaceholder}>
        <Text style={styles.imageIcon}>▧</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.title}>Welcome!</Text>

        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <Pressable
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeBtn}
          >
            <Text style={styles.eyeText}>{showPassword ? '🙈' : '👁'}</Text>
          </Pressable>
        </View>

        <Pressable onPress={onForgotPassword}>
          <Text style={styles.forgot}>Forgot password?</Text>
        </Pressable>

        {loading ? (
          <ActivityIndicator size="large" color="#0875F9" style={{ marginVertical: 10 }} />
        ) : (
          <Button title="Login" onPress={handleLogin} />
        )}

        <Text style={styles.registerText}>
          Not a member?{' '}
          <Text style={styles.link} onPress={onSignUp}>
            Register now
          </Text>
        </Text>

        <View style={styles.line} />

        <Text style={styles.or}>Or continue with</Text>

        <View style={styles.socials}>
          <Pressable style={[styles.socialBtn, { backgroundColor: '#E9364D' }]}>
            <Text style={styles.socialText}>G</Text>
          </Pressable>

          <Pressable style={[styles.socialBtn, { backgroundColor: '#202126' }]}>
            <Text style={styles.socialText}></Text>
          </Pressable>

          <Pressable style={[styles.socialBtn, { backgroundColor: '#0875F9' }]}>
            <Text style={styles.socialText}>f</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imagePlaceholder: {
    height: '32%',
    backgroundColor: '#EAF2FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 12,
  },
  imageIcon: {
    color: '#9CCFFF',
    fontSize: 34,
  },
  form: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 22,
  },
  title: {
    fontSize: 23,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 18,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#D9DDE5',
    borderRadius: 10,
    paddingHorizontal: 14,
    marginBottom: 12,
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
    marginBottom: 8,
  },
  passwordInput: {
    flex: 1,
    fontSize: 13,
  },
  eyeBtn: {
    padding: 4,
  },
  eyeText: {
    fontSize: 14,
    color: '#858B98',
  },
  forgot: {
    color: '#0875F9',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 20,
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
    marginTop: 22,
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
  socialBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialText: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 15,
  },
});