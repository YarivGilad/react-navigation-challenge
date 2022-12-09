import React, {FC} from 'react';
import {Pressable, Text} from 'react-native';
import styles from './flat.button.styles';

interface IProps {
  label: string;
  onPress: () => void;
}
const FlatButton: FC<IProps> = ({label, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};
export default FlatButton;
