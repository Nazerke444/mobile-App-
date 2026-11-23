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

const plans = [
  {
    name: 'Yearly',
    price: '€ 94.80',
    period: 'every year',
    discount: '-66% discount',
    popular: true,
  },
  {
    name: 'Monthly',
    price: '€ 10.90',
    period: 'every month',
    discount: '-53% discount',
    popular: false,
  },
  {
    name: 'Weekly',
    price: '€ 5.90',
    period: 'every week',
    discount: '',
    popular: false,
  },
];

export default function SubscriptionScreen({ onBack, onNext }: Props) {
  const [selected, setSelected] = useState('Yearly');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Choose your subscription plan</Text>
        <Text style={styles.subtitle}>And get a 7-day free trial</Text>

        <View style={styles.plans}>
          {plans.map(plan => {
            const active = selected === plan.name;

            return (
              <Pressable
                key={plan.name}
                onPress={() => setSelected(plan.name)}
                style={[styles.plan, active && styles.activePlan]}
              >
                {plan.popular && (
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>★</Text>
                  </View>
                )}

                <View style={[styles.radio, active && styles.radioActive]}>
                  {active && <View style={styles.radioInner} />}
                </View>

                <View style={styles.planInfo}>
                  <Text style={styles.planName}>{plan.name}</Text>
                  {!!plan.discount && (
                    <Text style={styles.discount}>{plan.discount}</Text>
                  )}
                </View>

                <View style={styles.priceBox}>
                  <Text style={styles.price}>{plan.price}</Text>
                  <Text style={styles.period}>{plan.period}</Text>
                </View>
              </Pressable>
            );
          })}
        </View>

        <View style={styles.benefits}>
          <Text style={styles.benefitTitle}>You'll get:</Text>
          <Text style={styles.benefit}>✦ Unlimited access</Text>
          <Text style={styles.benefit}>✦ 200GB storage</Text>
          <Text style={styles.benefit}>✦ Sync all your devices</Text>
        </View>

        <View style={styles.footer}>
          <Pressable onPress={onBack} style={styles.backBtn}>
            <Text style={styles.back}>Back</Text>
          </Pressable>
          <Button title="Subscribe" onPress={onNext} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    flexGrow: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#151923',
    marginBottom: 10,
    maxWidth: 280,
  },
  subtitle: {
    fontSize: 14,
    color: '#858B98',
    marginBottom: 28,
  },
  plans: {
    gap: 12,
  },
  plan: {
    minHeight: 68,
    borderWidth: 1,
    borderColor: '#E1E4EA',
    borderRadius: 14,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  activePlan: {
    backgroundColor: '#EAF2FF',
    borderColor: '#EAF2FF',
  },
  badge: {
    position: 'absolute',
    top: -8,
    right: -6,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#0875F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
  radio: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1.5,
    borderColor: '#B9C0CC',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  radioActive: {
    backgroundColor: '#0875F9',
    borderColor: '#0875F9',
  },
  radioInner: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FFFFFF',
  },
  planInfo: {
    flex: 1,
  },
  planName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#202633',
  },
  discount: {
    fontSize: 11,
    color: '#0875F9',
    marginTop: 3,
  },
  priceBox: {
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 15,
    fontWeight: '800',
    color: '#202633',
  },
  period: {
    fontSize: 11,
    color: '#687080',
    marginTop: 3,
  },
  benefits: {
    backgroundColor: '#F6F8FC',
    borderRadius: 14,
    padding: 18,
    marginTop: 24,
    gap: 12,
  },
  benefitTitle: {
    fontWeight: '800',
    color: '#202633',
    fontSize: 14,
  },
  benefit: {
    fontSize: 13,
    color: '#747D8C',
  },
  footer: {
    marginTop: 'auto',
    gap: 10,
    paddingTop: 24,
  },
  backBtn: {
    padding: 6,
    alignItems: 'center',
  },
  back: {
    color: '#0875F9',
    fontWeight: '600',
  },
});
