import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './notifications.screen.styles';

const NotificationsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Notifications</Text>
    </SafeAreaView>
  );
};

export default NotificationsScreen;
