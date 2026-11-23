import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Button from '../components/button';

type Props = {
  onBack: () => void;
  onNext: () => void;
};

const interests = [
  'User Interface',
  'User Experience',
  'User Research',
  'UX Writing',
  'User Testing',
  'Service Design',
  'Strategy',
  'Design Systems',
];

export default function PreferencesScreen({ onBack, onNext }: Props) {
  const [selected, setSelected] = useState<string[]>([
    'User Interface',
    'User Research',
    'Strategy',
    'Design Systems',
  ]);

  const toggleInterest = (item: string) => {
    setSelected(current =>
      current.includes(item)
        ? current.filter(value => value !== item)
        : [...current, item]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.progressTrack}>
          <View style={styles.progress} />
        </View>

        <Text style={styles.title}>Personalise your experience</Text>
        <Text style={styles.subtitle}>Choose your interests.</Text>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
        >
          {interests.map(item => {
            const active = selected.includes(item);

            return (
              <Pressable
                key={item}
                onPress={() => toggleInterest(item)}
                style={[styles.option, active && styles.activeOption]}
              >
                <Text style={styles.optionText}>{item}</Text>
                <Text style={styles.check}>{active ? '✓' : ''}</Text>
              </Pressable>
            );
          })}
        </ScrollView>

        <View style={styles.footer}>
          <Pressable onPress={onBack} style={styles.backBtn}>
            <Text style={styles.back}>Back</Text>
          </Pressable>
          <Button title="Next" onPress={onNext} />
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
    paddingBottom: 20,
  },
  progressTrack: {
    height: 6,
    backgroundColor: '#E7EAF0',
    borderRadius: 4,
    marginBottom: 24,
    overflow: 'hidden',
  },
  progress: {
    width: '50%',
    height: '100%',
    backgroundColor: '#0875F9',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#101828',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#858B98',
    marginBottom: 20,
  },
  list: {
    gap: 10,
    paddingBottom: 16,
  },
  option: {
    height: 50,
    borderWidth: 1,
    borderColor: '#E1E4EA',
    borderRadius: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  activeOption: {
    backgroundColor: '#EAF2FF',
    borderColor: '#EAF2FF',
  },
  optionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#202633',
  },
  check: {
    fontSize: 16,
    fontWeight: '800',
    color: '#0875F9',
  },
  footer: {
    paddingTop: 10,
    gap: 8,
  },
  backBtn: {
    paddingVertical: 6,
    alignItems: 'center',
  },
  back: {
    color: '#0875F9',
    fontWeight: '600',
    fontSize: 14,
  },
});
