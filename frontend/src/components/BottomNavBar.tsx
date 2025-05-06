// src/components/BottomNavBar.tsx
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const BottomNavBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.sideIcon}>
        <Ionicons name="home-outline" size={24} color="#666" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.sideIcon}>
        <Ionicons name="list-outline" size={24} color="#666" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.cameraButton}>
        <Ionicons name="camera" size={32} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.sideIcon}>
        <Ionicons name="cart-outline" size={24} color="#666" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.sideIcon}>
        <Ionicons name="person-outline" size={24} color="#666" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
    elevation: 10,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
  sideIcon: {
    padding: 10,
  },
  cameraButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
});

export default BottomNavBar;
