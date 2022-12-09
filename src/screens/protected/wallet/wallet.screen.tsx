import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './wallet.screen.styles';

const WalletScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Wallet</Text>
    </SafeAreaView>
  );
};

export default WalletScreen;
