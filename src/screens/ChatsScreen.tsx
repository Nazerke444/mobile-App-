import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  FlatList,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

type Props = {
  onNavigateTab: (tab: 'chats' | 'projects' | 'settings' | 'search') => void;
};

const initialChats = [
  { id: '1', name: 'Haley James', msg: 'Stand up for what you believe in', unread: 9 },
  { id: '2', name: 'Nathan Scott', msg: 'One day you’re seventeen and planning for someday...', unread: 0 },
  { id: '3', name: 'Brooke Davis', msg: 'I am who I am. No excuses.', unread: 2 },
  { id: '4', name: 'Jamie Scott', msg: 'Some people are a little different. I think that’s cool.', unread: 0 },
  { id: '5', name: 'Marvin McFadden', msg: 'Last night in the NBA the Charlotte Bobcats quietly...', unread: 0 },
  { id: '6', name: 'Antwon Taylor', msg: 'Meet me at the Rivercourt', unread: 0 },
  { id: '7', name: 'Jake Jagielski', msg: 'In your life, you’re gonna go to some great places...', unread: 0 },
];

export default function ChatsScreen({ onNavigateTab }: Props) {
  const [search, setSearch] = useState('');
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([
    { id: '1', sender: 'Brooke', text: 'Hey Lucas!', isMe: false },
    { id: '2', sender: 'Brooke', text: "How's your project going?", isMe: false },
    { id: '3', sender: 'Lucas', text: 'Hi Brooke!', isMe: true },
    { id: '4', sender: 'Lucas', text: "It's going well. Thanks for asking!", isMe: true },
    { id: '5', sender: 'Brooke', text: 'No worries. Let me know if you need any help 😉', isMe: false },
  ]);

  const sendMessage = () => {
    if (!inputText.trim()) return;
    setMessages(prev => [
      ...prev,
      { id: Date.now().toString(), sender: 'Lucas', text: inputText.trim(), isMe: true },
    ]);
    setInputText('');
  };

  if (activeChat) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.chatHeader}>
          <Pressable onPress={() => setActiveChat(null)} style={styles.backBtn}>
            <Text style={styles.blueText}>‹</Text>
          </Pressable>
          <Text style={styles.headerTitle}>{activeChat}</Text>
          <View style={styles.smallAvatar}>
            <Text style={styles.avatarEmoji}>👤</Text>
          </View>
        </View>

        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <FlatList
            data={messages}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.msgList}
            renderItem={({ item }) => (
              <View style={[styles.bubble, item.isMe ? styles.myBubble : styles.theirBubble]}>
                <Text style={[styles.senderName, item.isMe && styles.myText]}>
                  {item.sender}
                </Text>
                <Text style={[styles.msgText, item.isMe && styles.myText]}>
                  {item.text}
                </Text>
              </View>
            )}
          />

          <View style={styles.inputRow}>
            <Pressable style={styles.plusBtn}>
              <Text style={styles.plusText}>+</Text>
            </Pressable>
            <TextInput
              style={styles.msgInput}
              placeholder="Type a message..."
              value={inputText}
              onChangeText={setInputText}
            />
            <Pressable style={styles.sendBtn} onPress={sendMessage}>
              <Text style={styles.sendText}>➤</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }

  const filtered = initialChats.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topHeader}>
        <Text style={styles.blueLink}>Edit</Text>
        <Text style={styles.headerTitle}>Chats</Text>
        <Text style={styles.blueLink}>✎</Text>
      </View>

      <View style={styles.searchBox}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.chatRow}
            onPress={() => setActiveChat(item.name)}
          >
            <View style={styles.avatar}>
              <Text style={styles.avatarEmoji}>👤</Text>
            </View>
            <View style={styles.chatInfo}>
              <Text style={styles.chatName}>{item.name}</Text>
              <Text style={styles.chatMsg} numberOfLines={1}>
                {item.msg}
              </Text>
            </View>
            {item.unread > 0 && (
              <View style={styles.unreadBadge}>
                <Text style={styles.unreadText}>{item.unread}</Text>
              </View>
            )}
          </Pressable>
        )}
      />

      <View style={styles.tabBar}>
        <Pressable style={styles.tabItem}>
          <Text style={styles.tabIcon}>💬</Text>
          <Text style={[styles.tabLabel, styles.activeTab]}>Chats</Text>
        </Pressable>
        <Pressable style={styles.tabItem} onPress={() => onNavigateTab('projects')}>
          <Text style={styles.tabIcon}>📁</Text>
          <Text style={styles.tabLabel}>Projects</Text>
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
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F3F7',
  },
  headerTitle: { fontSize: 17, fontWeight: '700', color: '#111827' },
  blueLink: { color: '#0875F9', fontSize: 15, fontWeight: '600' },
  blueText: { color: '#0875F9', fontSize: 28, fontWeight: '400' },
  backBtn: { paddingRight: 12 },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F8FC',
    marginHorizontal: 16,
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 40,
    marginBottom: 10,
  },
  searchIcon: { fontSize: 14, marginRight: 8, opacity: 0.5 },
  searchInput: { flex: 1, fontSize: 14 },
  chatRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F6F8FC',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#EAF2FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  smallAvatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#EAF2FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarEmoji: { fontSize: 18 },
  chatInfo: { flex: 1, paddingRight: 8 },
  chatName: { fontSize: 14, fontWeight: '700', color: '#111827', marginBottom: 2 },
  chatMsg: { fontSize: 12, color: '#858B98' },
  unreadBadge: {
    backgroundColor: '#0875F9',
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  unreadText: { color: '#FFFFFF', fontSize: 11, fontWeight: '700' },
  msgList: { padding: 16, gap: 10 },
  bubble: { maxWidth: '75%', padding: 12, borderRadius: 16 },
  theirBubble: { alignSelf: 'flex-start', backgroundColor: '#F6F8FC' },
  myBubble: { alignSelf: 'flex-end', backgroundColor: '#0875F9' },
  senderName: { fontSize: 11, fontWeight: '700', color: '#858B98', marginBottom: 2 },
  msgText: { fontSize: 14, color: '#111827' },
  myText: { color: '#FFFFFF' },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: '#F1F3F7',
    gap: 8,
  },
  plusBtn: { padding: 6 },
  plusText: { fontSize: 24, color: '#0875F9' },
  msgInput: {
    flex: 1,
    backgroundColor: '#F6F8FC',
    borderRadius: 20,
    paddingHorizontal: 16,
    height: 40,
    fontSize: 14,
  },
  sendBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#0875F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendText: { color: '#FFFFFF', fontSize: 14 },
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