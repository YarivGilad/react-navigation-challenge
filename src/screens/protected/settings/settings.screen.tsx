import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import FlatButton from '../../../components/ui/flat-button/flat.button';
import styles from './settings.screen.styles';

const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View>
        <FlatButton
          onPress={() => console.log('go to SETTINGS_DETAIL')}
          label="Go To Settings Detail"
        />

        <FlatButton
          onPress={() => console.log('go to LOGIN')}
          label="Log out"
        />
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
