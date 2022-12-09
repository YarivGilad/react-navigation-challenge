import React, {FC} from 'react';
import {Pressable, Text} from 'react-native';
import styles from './link.button.styles';

interface IProps {
  label: string;
  onPress: () => void;
}
const LinkButton: FC<IProps> = ({label, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.linkButtonLabel}>{label}</Text>
    </Pressable>
  );
};
export default LinkButton;
