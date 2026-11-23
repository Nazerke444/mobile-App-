import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import Button from '../components/button';

type Props = {
  onNext: () => void;
};

export default function OnboardingScreen({ onNext }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageArea}>
        <Image
          source={{
            uri: 'https://unsplash.com',
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={styles.content}>
        <View style={styles.dots}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <Text style={styles.title}>
          Create a prototype in just a few minutes
        </Text>

        <Text style={styles.description}>
          Enjoy these pre-made components and worry only about creating the best
          product ever.
        </Text>

        <Button title="Next" onPress={onNext} style={{ marginTop: 'auto' }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imageArea: {
    height: '50%',
    backgroundColor: '#EAF2FF',
    margin: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 20,
  },
  dots: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 20,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: '#D9DDE5',
  },
  activeDot: {
    backgroundColor: '#0875F9',
  },
  title: {
    fontSize: 23,
    fontWeight: '800',
    color: '#101828',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: '#858B98',
    lineHeight: 21,
    marginBottom: 24,
  },
});
