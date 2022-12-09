import React, {FC} from 'react';
import {Pressable, TextInput, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../../constants/style.constants';
import {useTogglePasswordVisibility} from '../../../hooks/useTogglePasswordVisibility';

import styles from './password.input.styles';

const PasswordInput: FC = () => {
  const {passwordVisibility, currentIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility('eye', 'eye-off');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={passwordVisibility}
      />
      <Pressable onPress={handlePasswordVisibility}>
        <Ionicons name={currentIcon} size={22} color={COLORS.primaryDark} />
      </Pressable>
    </View>
  );
};
export default PasswordInput;
