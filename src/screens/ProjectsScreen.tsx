import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView } from 'react-native';

type Props = {
  onOpenFeedback: () => void;
  onNavigateTab: (tab: 'chats' | 'projects' | 'settings' | 'search') => void;
};

export default function ProjectsScreen({ onOpenFeedback, onNavigateTab }: Props) {
  const [tab, setTab] = useState<'To do' | 'In progress' | 'Finished'>('Finished');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{ width: 24 }} />
        <Text style={styles.headerTitle}>Projects</Text>
        <Pressable onPress={() => onNavigateTab('search')}>
          <Text style={styles.searchIcon}>🔍</Text>
        </Pressable>
      </View>

      <View style={styles.segmentContainer}>
        {(['To do', 'In progress', 'Finished'] as const).map(item => {
          const active = tab === item;
          return (
            <Pressable
              key={item}
              onPress={() => setTab(item)}
              style={[styles.segmentBtn, active && styles.activeSegment]}
            >
              <Text style={[styles.segmentText, active && styles.activeSegmentText]}>
                {item}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <View style={styles.emptyCenter}>
        <View style={styles.placeholderBox}>
          <Text style={styles.placeholderIcon}>▧</Text>
        </View>

        <Text style={styles.emptyTitle}>Nothing here. For now.</Text>
        <Text style={styles.emptyDesc}>
          This is where you’ll find your{'\n'}finished projects.
        </Text>

        <Pressable style={styles.startBtn} onPress={onOpenFeedback}>
          <Text style={styles.startBtnText}>Start a project</Text>
        </Pressable>
      </View>

      <View style={styles.tabBar}>
        <Pressable style={styles.tabItem} onPress={() => onNavigateTab('chats')}>
          <Text style={styles.tabIcon}>💬</Text>
          <Text style={styles.tabLabel}>Chats</Text>
        </Pressable>
        <Pressable style={styles.tabItem}>
          <Text style={styles.tabIcon}>📁</Text>
          <Text style={[styles.tabLabel, styles.activeTab]}>Projects</Text>
        </Pressable>
        <Pressable style={styles.tabItem} onPress={() => onNavigateTab('search')}>
          <Text style={styles.tabIcon}>🔍</Text>
          <Text style={styles.tabLabel}>Explore</Text>
        </Pressable>
        <Pressable style={styles.tabItem} onPress={() => onNavigateTab('settings')}>
          <Text style={styles.tabIcon}>⚙️</Text>
          <Text style={styles.tabLabel}>Settings</Text>
        </Pressable>
      </View>
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
    paddingVertical: 14,
  },
  headerTitle: { fontSize: 17, fontWeight: '700', color: '#111827' },
  searchIcon: { fontSize: 16, color: '#0875F9' },
  segmentContainer: {
    flexDirection: 'row',
    backgroundColor: '#F6F8FC',
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 4,
  },
  segmentBtn: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 9,
    alignItems: 'center',
  },
  activeSegment: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  segmentText: { fontSize: 12, fontWeight: '600', color: '#858B98' },
  activeSegmentText: { color: '#111827', fontWeight: '700' },
  emptyCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  placeholderBox: {
    width: 86,
    height: 86,
    borderRadius: 20,
    backgroundColor: '#EAF2FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
  },
  placeholderIcon: { fontSize: 32, color: '#9CCFFF' },
  emptyTitle: { fontSize: 18, fontWeight: '800', color: '#111827', marginBottom: 8 },
  emptyDesc: {
    fontSize: 13,
    color: '#858B98',
    textAlign: 'center',
    lineHeight: 19,
    marginBottom: 24,
  },
  startBtn: {
    backgroundColor: '#0875F9',
    paddingHorizontal: 22,
    height: 44,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startBtnText: { color: '#FFFFFF', fontWeight: '700', fontSize: 13 },
  tabBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#E7EAF0',
    paddingVertical: 10,
  },
  tabItem: { flex: 1, alignItems: 'center', gap: 3 },
  tabIcon: { fontSize: 18 },
  tabLabel: { fontSize: 11, color: '#858B98' },
  activeTab: { color: '#0875F9', fontWeight: '700' },
});