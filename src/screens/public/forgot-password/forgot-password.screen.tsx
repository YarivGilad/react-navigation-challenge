import {Text, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './forgot-password.screen.styles';

const ForgotPasswordScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.subtitle}>User ID: ??? </Text>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
