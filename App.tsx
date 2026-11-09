import React, { useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import OnboardingScreen from './src/screens/OnboardingScreen';
import PreferencesScreen from './src/screens/PreferencesScreen';
import SubscriptionScreen from './src/screens/SubscriptionScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';

export type ScreenName =
  | 'onboarding'
  | 'preferences'
  | 'subscription'
  | 'login'
  | 'signup';

export default function App() {
  const [screen, setScreen] =
    useState<ScreenName>('onboarding');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <StatusBar barStyle="dark-content" />

      {screen === 'onboarding' && (
        <OnboardingScreen
          onNext={() => setScreen('preferences')}
        />
      )}

      {screen === 'preferences' && (
        <PreferencesScreen
          onBack={() => setScreen('onboarding')}
          onNext={() => setScreen('subscription')}
        />
      )}

      {screen === 'subscription' && (
        <SubscriptionScreen
          onBack={() => setScreen('preferences')}
          onNext={() => setScreen('login')}
        />
      )}

      {screen === 'login' && (
        <LoginScreen
          onSignUp={() => setScreen('signup')}
          onForgotPassword={() =>
            alert('Құпиясөзді қалпына келтіру')
          }
        />
      )}

      {screen === 'signup' && (
        <SignUpScreen
          onLogin={() => setScreen('login')}
        />
      )}
    </SafeAreaView>
  );
}