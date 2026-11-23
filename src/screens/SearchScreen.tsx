import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  FlatList,
  SafeAreaView,
  Modal,
} from 'react-native';
import Button from '../components/button';

type Props = {
  onBack: () => void;
};

const products = [
  { id: '1', title: 'Amazing Shoes', price: '€ 12.00', color: 'BLUE' },
  { id: '2', title: 'Fabulous Shoes', price: '€ 15.00', color: 'GREEN' },
  { id: '3', title: 'Fantastic Shoes', price: '€ 15.00', color: 'BLACK' },
  { id: '4', title: 'Spectacular Shoes', price: '€ 12.00', color: 'WHITE' },
  { id: '5', title: 'Stunning Shoes', price: '€ 12.00', color: 'RED' },
  { id: '6', title: 'Wonderful Shoes', price: '€ 15.00', color: 'GREEN' },
];

const colors = [
  'BLACK', 'WHITE', 'GREY', 'YELLOW',
  'BLUE', 'PURPLE', 'GREEN', 'RED',
  'PINK', 'ORANGE', 'GOLD', 'SILVER',
];

export default function SearchScreen({ onBack }: Props) {
  const [query, setQuery] = useState('Shoes');
  const [filterVisible, setFilterVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState('GREEN');

  const filteredProducts = products.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchHeader}>
        <Pressable onPress={onBack} style={styles.backBtn}>
          <Text style={styles.backText}>‹</Text>
        </Pressable>
        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            value={query}
            onChangeText={setQuery}
            placeholder="Search products..."
          />
          {query.length > 0 && (
            <Pressable onPress={() => setQuery('')}>
              <Text style={styles.clearIcon}>✕</Text>
            </Pressable>
          )}
        </View>
      </View>

      <View style={styles.controlsRow}>
        <Pressable style={styles.controlBtn} onPress={() => alert('Сұрыптау')}>
          <Text style={styles.controlText}>⇅ Sort</Text>
        </Pressable>

        <Pressable
          style={styles.controlBtn}
          onPress={() => setFilterVisible(true)}
        >
          <Text style={styles.controlText}>☰ Filter</Text>
          <View style={styles.filterBadge}>
            <Text style={styles.filterBadgeText}>2</Text>
          </View>
        </Pressable>
      </View>

      <FlatList
        data={filteredProducts}
        numColumns={2}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.grid}
        columnWrapperStyle={{ gap: 12 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardImage}>
              <Text style={styles.cardIcon}>▧</Text>
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardPrice}>{item.price}</Text>
            </View>
          </View>
        )}
      />

      {/* Сүзгі (Filter) модалы */}
      <Modal
        visible={filterVisible}
        animationType="slide"
        onRequestClose={() => setFilterVisible(false)}
      >
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Pressable onPress={() => setFilterVisible(false)}>
              <Text style={styles.blueAction}>Cancel</Text>
            </Pressable>
            <Text style={styles.modalTitle}>Filter</Text>
            <Pressable onPress={() => setSelectedColor('')}>
              <Text style={styles.blueAction}>Clear All</Text>
            </Pressable>
          </View>

          <View style={styles.filterSection}>
            <View style={styles.filterRow}>
              <Text style={styles.filterLabel}>Category</Text>
              <View style={styles.filterBadge}>
                <Text style={styles.filterBadgeText}>1</Text>
              </View>
            </View>

            <View style={styles.filterRow}>
              <Text style={styles.filterLabel}>Price Range</Text>
              <Text style={styles.chevron}>⌄</Text>
            </View>

            <View style={styles.filterRowNoBorder}>
              <Text style={styles.filterLabel}>Color</Text>
              <View style={styles.filterBadge}>
                <Text style={styles.filterBadgeText}>1</Text>
              </View>
            </View>

            <View style={styles.colorWrap}>
              {colors.map(c => {
                const active = selectedColor === c;
                return (
                  <Pressable
                    key={c}
                    onPress={() => setSelectedColor(c)}
                    style={[styles.colorTag, active && styles.activeColorTag]}
                  >
                    <Text
                      style={[
                        styles.colorTagText,
                        active && styles.activeColorTagText,
                      ]}
                    >
                      {c}
                    </Text>
                  </Pressable>
                );
              })}
            </View>

            <View style={styles.filterRow}>
              <Text style={styles.filterLabel}>Size</Text>
              <Text style={styles.chevron}>⌄</Text>
            </View>

            <View style={styles.filterRow}>
              <Text style={styles.filterLabel}>Customer Review</Text>
              <Text style={styles.chevron}>⌄</Text>
            </View>
          </View>

          <View style={styles.modalFooter}>
            <Button
              title="Apply Filters"
              onPress={() => setFilterVisible(false)}
            />
          </View>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 10,
  },
  backBtn: { paddingRight: 4 },
  backText: { fontSize: 28, color: '#0875F9' },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F8FC',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 42,
  },
  searchIcon: { fontSize: 14, marginRight: 8 },
  searchInput: { flex: 1, fontSize: 14, color: '#111827' },
  clearIcon: { fontSize: 13, color: '#858B98', padding: 4 },
  controlsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 14,
    gap: 10,
  },
  controlBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E1E4EA',
    borderRadius: 10,
    height: 38,
    gap: 6,
  },
  controlText: { fontSize: 13, fontWeight: '600', color: '#202633' },
  filterBadge: {
    backgroundColor: '#0875F9',
    width: 18,
    height: 18,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterBadgeText: { color: '#FFFFFF', fontSize: 10, fontWeight: '700' },
  grid: { paddingHorizontal: 16, gap: 12, paddingBottom: 20 },
  card: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    borderRadius: 14,
    overflow: 'hidden',
  },
  cardImage: {
    height: 120,
    backgroundColor: '#EAF2FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardIcon: { fontSize: 28, color: '#9CCFFF' },
  cardBody: { padding: 12 },
  cardTitle: { fontSize: 13, color: '#202633', marginBottom: 4 },
  cardPrice: { fontSize: 14, fontWeight: '800', color: '#111827' },
  modalContainer: { flex: 1, backgroundColor: '#FFFFFF' },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F3F7',
  },
  blueAction: { color: '#0875F9', fontSize: 14, fontWeight: '600' },
  modalTitle: { fontSize: 16, fontWeight: '700', color: '#111827' },
  filterSection: { paddingHorizontal: 20, flex: 1 },
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F3F7',
  },
  filterRowNoBorder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 12,
  },
  filterLabel: { fontSize: 14, fontWeight: '600', color: '#111827' },
  chevron: { fontSize: 18, color: '#858B98' },
  colorWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F3F7',
  },
  colorTag: {
    backgroundColor: '#EAF2FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
  },
  activeColorTag: { backgroundColor: '#0875F9' },
  colorTagText: { fontSize: 10, fontWeight: '700', color: '#0875F9' },
  activeColorTagText: { color: '#FFFFFF' },
  modalFooter: { padding: 20 },
});