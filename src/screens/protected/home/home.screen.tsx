import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './home.screen.styles';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome Home!</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
