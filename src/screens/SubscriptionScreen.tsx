import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';

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
  },
  {
    name: 'Monthly',
    price: '€ 10.90',
    period: 'every month',
    discount: '-53% discount',
  },
  {
    name: 'Weekly',
    price: '€ 5.90',
    period: 'every week',
    discount: '',
  },
];

export default function SubscriptionScreen({
  onBack,
  onNext,
}: Props) {

  const [selected, setSelected] = useState('Yearly');

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Choose your subscription plan
      </Text>

      <Text style={styles.subtitle}>
        And get a 7-day free trial
      </Text>

      <View style={styles.plans}>

        {plans.map(plan => {

          const active = selected === plan.name;

          return (
            <Pressable
              key={plan.name}
              onPress={() => setSelected(plan.name)}
              style={[
                styles.plan,
                active && styles.activePlan,
              ]}
            >

              <View
                style={[
                  styles.radio,
                  active && styles.radioActive,
                ]}
              >
                {active && (
                  <View style={styles.radioInner} />
                )}
              </View>

              <View style={styles.planInfo}>

                <Text style={styles.planName}>
                  {plan.name}
                </Text>

                {!!plan.discount && (
                  <Text style={styles.discount}>
                    {plan.discount}
                  </Text>
                )}

              </View>

              <View style={styles.priceBox}>

                <Text style={styles.price}>
                  {plan.price}
                </Text>

                <Text style={styles.period}>
                  {plan.period}
                </Text>

              </View>

            </Pressable>
          );
        })}

      </View>

      <View style={styles.benefits}>

        <Text style={styles.benefitTitle}>
          You'll get:
        </Text>

        <Text style={styles.benefit}>
          ✦ Unlimited access
        </Text>

        <Text style={styles.benefit}>
          ✦ 200GB storage
        </Text>

        <Text style={styles.benefit}>
          ✦ Sync all your devices
        </Text>

      </View>

      <View style={styles.footer}>

        <Pressable onPress={onBack}>
          <Text style={styles.back}>Back</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={onNext}
        >
          <Text style={styles.buttonText}>
            Subscribe
          </Text>
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
    justifyContent: 'center',
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
    gap: 10,
  },

  plan: {
    minHeight: 68,
    borderWidth: 1,
    borderColor: '#E1E4EA',
    borderRadius: 14,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },

  activePlan: {
    backgroundColor: '#EAF2FF',
    borderColor: '#EAF2FF',
  },

  radio: {
    width: 17,
    height: 17,
    borderRadius: 10,
    borderWidth: 1,
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
    borderRadius: 4,
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
    fontSize: 10,
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
    fontSize: 10,
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
  },

  benefit: {
    fontSize: 12,
    color: '#747D8C',
  },

  footer: {
    marginTop: 'auto',
    gap: 10,
    paddingTop: 20,
  },

  back: {
    textAlign: 'center',
    color: '#0875F9',
    padding: 6,
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