import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';

type Props = {
  onNext: () => void;
};

export default function OnboardingScreen({ onNext }: Props) {
  return (
    <View style={styles.container}>

      <View style={styles.imageArea}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900'
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
          Enjoy these pre-made components and worry only
          about creating the best product ever.
        </Text>

        <Pressable
          style={styles.button}
          onPress={onNext}
        >
          <Text style={styles.buttonText}>
            Next
          </Text>
        </Pressable>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  imageArea: {
    height: '53%',
    backgroundColor: '#EAF2FF',
    margin: 16,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 20,
  },

  dots: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 24,
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

  button: {
    marginTop: 'auto',
    height: 48,
    borderRadius: 9,
    backgroundColor: '#0875F9',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },
});