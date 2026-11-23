import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  SafeAreaView,
  Modal,
} from 'react-native';

type Props = {
  onLogout: () => void;
};

const menuItems = [
  'Saved Messages',
  'Recent Calls',
  'Devices',
  'Notifications',
  'Appearance',
  'Language',
  'Privacy & Security',
  'Storage',
];

export default function SettingsScreen({ onLogout }: Props) {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Settings</Text>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profileSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarIcon}>👤</Text>
            <View style={styles.editBadge}>
              <Text style={styles.editIcon}>✎</Text>
            </View>
          </View>

          <Text style={styles.name}>Lucas Scott</Text>
          <Text style={styles.username}>@lucasscott</Text>
        </View>

        <View style={styles.menuList}>
          {menuItems.map(item => (
            <Pressable
              key={item}
              style={styles.menuItem}
              onPress={() => alert(`${item} бөлімі ашылды`)}
            >
              <Text style={styles.menuText}>{item}</Text>
              <Text style={styles.chevron}>›</Text>
            </Pressable>
          ))}

          <Pressable
            style={styles.menuItem}
            onPress={() => setShowLogoutModal(true)}
          >
            <Text style={[styles.menuText, styles.logoutText]}>Log out</Text>
            <Text style={[styles.chevron, styles.logoutText]}>›</Text>
          </Pressable>
        </View>
      </ScrollView>

      <View style={styles.tabBar}>
        <Pressable style={styles.tabItem} onPress={() => alert('Chats')}>
          <Text style={styles.tabIcon}>💬</Text>
          <Text style={styles.tabLabel}>Chats</Text>
        </Pressable>

        <Pressable style={styles.tabItem} onPress={() => alert('Friends')}>
          <Text style={styles.tabIcon}>👥</Text>
          <Text style={styles.tabLabel}>Friends</Text>
        </Pressable>

        <Pressable style={styles.tabItem}>
          <Text style={[styles.tabIcon, styles.activeTab]}>⚙️</Text>
          <Text style={[styles.tabLabel, styles.activeTabLabel]}>Settings</Text>
        </Pressable>
      </View>

      {/* Log out қалқымалы терезесі */}
      <Modal
        visible={showLogoutModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowLogoutModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Log out</Text>
            <Text style={styles.modalDesc}>
              Are you sure you want to log out? You'll need to login again to
              use the app.
            </Text>

            <View style={styles.modalActions}>
              <Pressable
                style={styles.cancelBtn}
                onPress={() => setShowLogoutModal(false)}
              >
                <Text style={styles.cancelText}>Cancel</Text>
              </Pressable>

              <Pressable
                style={styles.confirmBtn}
                onPress={() => {
                  setShowLogoutModal(false);
                  onLogout();
                }}
              >
                <Text style={styles.confirmText}>Log out</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111827',
    textAlign: 'center',
    paddingVertical: 14,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 24,
  },
  avatar: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: '#EAF2FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    position: 'relative',
  },
  avatarIcon: {
    fontSize: 36,
    color: '#9CCFFF',
  },
  editBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#0875F9',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  editIcon: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  name: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
  },
  username: {
    fontSize: 13,
    color: '#858B98',
    marginTop: 2,
  },
  menuList: {
    marginTop: 4,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F3F7',
  },
  menuText: {
    fontSize: 14,
    color: '#202633',
    fontWeight: '500',
  },
  chevron: {
    fontSize: 20,
    color: '#9CA3AF',
  },
  logoutText: {
    color: '#E9364D',
    fontWeight: '600',
  },
  tabBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#E7EAF0',
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  tabIcon: {
    fontSize: 18,
    opacity: 0.5,
  },
  activeTab: {
    opacity: 1,
  },
  tabLabel: {
    fontSize: 11,
    color: '#858B98',
  },
  activeTabLabel: {
    color: '#0875F9',
    fontWeight: '700',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(17, 24, 39, 0.55)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 28,
  },
  modalCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 22,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 8,
  },
  modalDesc: {
    fontSize: 13,
    color: '#858B98',
    textAlign: 'center',
    lineHeight: 19,
    marginBottom: 22,
  },
  modalActions: {
    flexDirection: 'row',
    gap: 10,
    width: '100%',
  },
  cancelBtn: {
    flex: 1,
    height: 44,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#0875F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelText: {
    color: '#0875F9',
    fontWeight: '700',
    fontSize: 13,
  },
  confirmBtn: {
    flex: 1,
    height: 44,
    borderRadius: 10,
    backgroundColor: '#0875F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
  },
});
