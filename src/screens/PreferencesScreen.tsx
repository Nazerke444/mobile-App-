import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';

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

export default function PreferencesScreen({
  onBack,
  onNext,
}: Props) {

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
    <View style={styles.container}>

      <View style={styles.progressTrack}>
        <View style={styles.progress} />
      </View>

      <Text style={styles.title}>
        Personalise your experience
      </Text>

      <Text style={styles.subtitle}>
        Choose your interests.
      </Text>

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
              style={[
                styles.option,
                active && styles.activeOption,
              ]}
            >
              <Text style={styles.optionText}>
                {item}
              </Text>

              <Text style={styles.check}>
                {active ? '✓' : ''}
              </Text>

            </Pressable>
          );
        })}
      </ScrollView>

      <View style={styles.footer}>

        <Pressable onPress={onBack}>
          <Text style={styles.back}>Back</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={onNext}
        >
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#FFFFFF',
  },

  progressTrack: {
    height: 5,
    backgroundColor: '#E7EAF0',
    borderRadius: 5,
    marginTop: 18,
    marginBottom: 30,
  },

  progress: {
    width: '50%',
    height: 5,
    backgroundColor: '#0875F9',
    borderRadius: 5,
  },

  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#151923',
    marginBottom: 10,
  },

  subtitle: {
    color: '#858B98',
    fontSize: 14,
    marginBottom: 24,
  },

  list: {
    gap: 9,
    paddingBottom: 12,
  },

  option: {
    minHeight: 48,
    borderWidth: 1,
    borderColor: '#E1E4EA',
    borderRadius: 10,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  activeOption: {
    backgroundColor: '#EAF2FF',
    borderColor: '#EAF2FF',
  },

  optionText: {
    color: '#303642',
    fontSize: 14,
  },

  check: {
    color: '#0875F9',
    fontSize: 18,
    fontWeight: '700',
  },

  footer: {
    gap: 12,
    paddingTop: 12,
  },

  back: {
    color: '#0875F9',
    textAlign: 'center',
    padding: 8,
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

});