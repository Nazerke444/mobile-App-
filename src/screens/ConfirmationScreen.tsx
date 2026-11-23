import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  SafeAreaView,
} from 'react-native';
import Button from '../components/button';

type Props = {
  onContinue: () => void;
  onBack: () => void;
};

export default function ConfirmationScreen({ onContinue, onBack }: Props) {
  const [code, setCode] = useState(['', '', '', '']);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputs = useRef<Array<TextInput | null>>([]);

  const handleChange = (text: string, index: number) => {
    const cleanText = text.replace(/[^0-9]/g, '');
    const newCode = [...code];
    newCode[index] = cleanText;
    setCode(newCode);

    if (cleanText && index < 3) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    if (code.join('').length < 4) {
      alert('4 таңбалы кодты толық енгізіңіз.');
      return;
    }
    onContinue();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Pressable onPress={onBack} style={styles.backBtn}>
          <Text style={styles.backText}>← Back</Text>
        </Pressable>

        <Text style={styles.title}>Enter confirmation code</Text>
        <Text style={styles.subtitle}>
          A 4-digit code was sent to{'\n'}lucasscott3@email.com
        </Text>

        <View style={styles.codeRow}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={ref => {
                inputs.current[index] = ref;
              }}
              style={[
                styles.codeBox,
                activeIndex === index && styles.activeCodeBox,
              ]}
              value={digit}
              onChangeText={text => handleChange(text, index)}
              onKeyPress={e => handleKeyPress(e, index)}
              onFocus={() => setActiveIndex(index)}
              keyboardType="number-pad"
              maxLength={1}
              textAlign="center"
            />
          ))}
        </View>

        <View style={styles.footer}>
          <Pressable onPress={() => alert('Код қайта жіберілді!')}>
            <Text style={styles.resend}>Resend code</Text>
          </Pressable>

          <Button title="Continue" onPress={handleVerify} />
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
  inner: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
  },
  backBtn: {
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  backText: {
    color: '#0875F9',
    fontWeight: '600',
    fontSize: 14,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 13,
    color: '#858B98',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 32,
  },
  codeRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  codeBox: {
    width: 52,
    height: 52,
    borderWidth: 1.5,
    borderColor: '#D9DDE5',
    borderRadius: 12,
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
  },
  activeCodeBox: {
    borderColor: '#0875F9',
  },
  footer: {
    marginTop: 'auto',
    gap: 18,
  },
  resend: {
    textAlign: 'center',
    color: '#0875F9',
    fontWeight: '700',
    fontSize: 13,
  },
});
