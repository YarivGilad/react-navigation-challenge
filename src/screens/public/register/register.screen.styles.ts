import {StyleSheet} from 'react-native';
import {baseContainerStyles} from '../../../base-styles/container.styles';
import {COLORS, FONTS} from '../../../constants/style.constants';

interface iRegisterScreenStyles {
  container: object;
  title: object;
}
const styles = StyleSheet.create<iRegisterScreenStyles>({
  container: {
    ...baseContainerStyles.container,
    ...baseContainerStyles.vbox,
    backgroundColor: COLORS.primary,
  },
  title: {
    fontSize: FONTS.size.xxl,
    color: COLORS.white,
  },
});
export default styles;
