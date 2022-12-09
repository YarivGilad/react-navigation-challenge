import {StyleSheet} from 'react-native';
import {FONTS} from '../../../constants/style.constants';
import {baseButtonStyles} from '../../../base-styles/button.styles';

interface iGradientButtonStyles {
  wrapper: object;
  linearGradient: object;
  button: object;
  buttonLabel: object;
}

const styles = StyleSheet.create<iGradientButtonStyles>({
  ...baseButtonStyles.gradientButton,
  buttonLabel: {
    ...baseButtonStyles.gradientButton.buttonLabel,
    fontSize: FONTS.size.md,
    fontWeight: FONTS.weight.bold,
    textTransform: 'uppercase',
  },
});
export default styles;
