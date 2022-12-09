import {StyleSheet} from 'react-native';
import {baseButtonStyles} from '../../../base-styles/button.styles';
import {COLORS} from '../../../constants/style.constants';

interface iFlatButtonStyles {
  button: object;
  label: object;
}
const styles = StyleSheet.create<iFlatButtonStyles>({
  ...baseButtonStyles.flatButton,
  button: {
    ...baseButtonStyles.flatButton.button,
    backgroundColor: COLORS.primaryDark,
  },
});
export default styles;
