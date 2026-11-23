import React, { useState } from 'react';
import OnboardingScreen from './src/screens/OnboardingScreen';
import PreferencesScreen from './src/screens/PreferencesScreen';
import SubscriptionScreen from './src/screens/SubscriptionScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ConfirmationScreen from './src/screens/ConfirmationScreen';
import SettingsScreen from './src/screens/SettingsScreen';

type Screen =
  | 'onboarding'
  | 'preferences'
  | 'subscription'
  | 'login'
  | 'signup'
  | 'confirmation'
  | 'settings';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('onboarding');

  switch (currentScreen) {
    case 'onboarding':
      return (
        <OnboardingScreen
          onNext={() => setCurrentScreen('preferences')}
        />
      );

    case 'preferences':
      return (
        <PreferencesScreen
          onBack={() => setCurrentScreen('onboarding')}
          onNext={() => setCurrentScreen('subscription')}
        />
      );

    case 'subscription':
      return (
        <SubscriptionScreen
          onBack={() => setCurrentScreen('preferences')}
          onNext={() => setCurrentScreen('login')}
        />
      );

    case 'login':
      return (
        <LoginScreen
          onSignUp={() => setCurrentScreen('signup')}
          onForgotPassword={() => setCurrentScreen('confirmation')}
        />
      );

    case 'signup':
      return (
        <SignUpScreen
          onLogin={() => setCurrentScreen('login')}
        />
      );

    case 'confirmation':
      return (
        <ConfirmationScreen
          onBack={() => setCurrentScreen('login')}
          onContinue={() => setCurrentScreen('settings')}
        />
      );

    case 'settings':
      return (
        <SettingsScreen
          onLogout={() => setCurrentScreen('login')}
        />
      );

    default:
      return null;
  }
}
