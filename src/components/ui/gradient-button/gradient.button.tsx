import React, {FC} from 'react';
import {Pressable, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../../constants/style.constants';

import styles from './gradient.button.styles';

interface IProps {
  onPress: () => void;
  label: string;
}
const GradientButton: FC<IProps> = ({onPress, label}) => {
  console.log({styles});

  return (
    <View style={styles.wrapper}>
      <LinearGradient
        colors={[COLORS.secondaryLight, COLORS.secondaryDark]}
        style={styles.linearGradient}
        start={{y: 0.0, x: 0.0}}
        end={{y: 1.0, x: 0.0}}>
        <Pressable onPress={onPress} style={styles.button}>
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
};
export default GradientButton;
