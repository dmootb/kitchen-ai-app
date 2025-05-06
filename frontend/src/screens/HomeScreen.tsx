import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BottomNavBar from '../components/BottomNavBar';
import Card from '../components/Card';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Card title="Top Recipes Based on Your Inventory" style={styles.largeCard}>
          <Text>- Chickpea Stir Fry</Text>
          <Text>- Tuna Casserole</Text>
          <Text>- Tomato Pasta Bake</Text>
        </Card>

        <Card title="Inventory Peek" style={styles.mediumCardFull}>
          <Text>- Bananas</Text>
          <Text>- Olive Oil</Text>
          <Text>- Cereal</Text>
        </Card>

        <View style={styles.row}>
          <Card title="Shopping List" style={styles.mediumCard}>
            <Text>- Eggs (6)</Text>
            <Text>- Milk (1L)</Text>
            <Text>- Spinach (200g)</Text>
          </Card>
          <Card title="Monthly Food Spend" style={styles.mediumCard}>
            <Text>$132.50</Text>
          </Card>
        </View>

        <View style={styles.row}>
          <Card title="Expiring Soon" style={styles.smallCard}>
            <Text>- Yogurt (2 days)</Text>
            <Text>- Chicken (3 days)</Text>
            <Text>- Berries (4 days)</Text>
          </Card>
          <Card title="Generate More Recipes" style={styles.smallCard}>
            <Text>🔁 Based on current inventory</Text>
          </Card>
        </View>
      </ScrollView>

      <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 100,
  },
  largeCard: {
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  mediumCard: {
    width: '48%',
  },
  mediumCardFull: {
    width: '100%',
    marginBottom: 16,
  },
  smallCard: {
    width: '48%',
  },
});

export default HomeScreen;
