import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import FlatButton from '../../../components/ui/flat-button/flat.button';
import styles from './settings-detail.screen.styles';

const SettingsDetailScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Settings Detail</Text>
      <FlatButton onPress={() => console.log('go BACK')} label="Go back" />
    </SafeAreaView>
  );
};

export default SettingsDetailScreen;
