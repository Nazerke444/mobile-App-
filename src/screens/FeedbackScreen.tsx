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
  onBack: () => void;
};

const likedTags = ['EASY TO USE', 'COMPLETE', 'HELPFUL', 'CONVENIENT', 'LOOKS GOOD'];
const improveTags = [
  'COULD HAVE MORE COMPONENTS',
  'COMPLEX',
  'NOT INTERACTIVE',
  'ONLY ENGLISH',
];

export default function FeedbackScreen({ onBack }: Props) {
  const [rating, setRating] = useState(4);
  const [selectedLiked, setSelectedLiked] = useState<string[]>([
    'EASY TO USE',
    'HELPFUL',
    'CONVENIENT',
  ]);
  const [selectedImprove, setSelectedImprove] = useState<string[]>([
    'COULD HAVE MORE COMPONENTS',
    'NOT INTERACTIVE',
  ]);
  const [comment, setComment] = useState('');

  const toggleTag = (
    tag: string,
    list: string[],
    setter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setter(list.includes(tag) ? list.filter(t => t !== tag) : [...list, tag]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={onBack}>
          <Text style={styles.backArrow}>‹</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Feedback</Text>
        <View style={{ width: 20 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Your project is finished.</Text>
        <Text style={styles.subtitle}>How would you rate the prototyping kit?</Text>

        <View style={styles.starsRow}>
          {[1, 2, 3, 4, 5].map(star => (
            <Pressable key={star} onPress={() => setRating(star)}>
              <Text style={[styles.star, star <= rating && styles.activeStar]}>★</Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.sectionLabel}>What did you like about it?</Text>
        <View style={styles.tagsWrap}>
          {likedTags.map(tag => {
            const active = selectedLiked.includes(tag);
            return (
              <Pressable
                key={tag}
                onPress={() => toggleTag(tag, selectedLiked, setSelectedLiked)}
                style={[styles.tag, active && styles.activeTag]}
              >
                <Text style={[styles.tagText, active && styles.activeTagText]}>
                  {tag}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <Text style={styles.sectionLabel}>What could be improved?</Text>
        <View style={styles.tagsWrap}>
          {improveTags.map(tag => {
            const active = selectedImprove.includes(tag);
            return (
              <Pressable
                key={tag}
                onPress={() => toggleTag(tag, selectedImprove, setSelectedImprove)}
                style={[styles.tag, active && styles.activeTag]}
              >
                <Text style={[styles.tagText, active && styles.activeTagText]}>
                  {tag}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <Text style={styles.sectionLabel}>Anything else?</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Tell us everything."
          multiline
          numberOfLines={4}
          value={comment}
          onChangeText={setComment}
          textAlignVertical="top"
        />

        <Button
          title="Submit"
          onPress={() => {
            alert('Пікіріңіз сәтті жіберілді!');
            onBack();
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  backArrow: { fontSize: 28, color: '#0875F9' },
  headerTitle: { fontSize: 17, fontWeight: '700', color: '#111827' },
  content: { paddingHorizontal: 24, paddingBottom: 30 },
  title: { fontSize: 18, fontWeight: '800', color: '#111827', marginTop: 8 },
  subtitle: { fontSize: 13, color: '#858B98', marginTop: 4, marginBottom: 16 },
  starsRow: { flexDirection: 'row', gap: 10, marginBottom: 24 },
  star: { fontSize: 28, color: '#E1E4EA' },
  activeStar: { color: '#0875F9' },
  sectionLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#202633',
    marginBottom: 10,
  },
  tagsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 22,
  },
  tag: {
    backgroundColor: '#EAF2FF',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 16,
  },
  activeTag: {
    backgroundColor: '#0875F9',
  },
  tagText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#0875F9',
  },
  activeTagText: {
    color: '#FFFFFF',
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#D9DDE5',
    borderRadius: 12,
    padding: 14,
    height: 100,
    fontSize: 13,
    marginBottom: 24,
  },
});