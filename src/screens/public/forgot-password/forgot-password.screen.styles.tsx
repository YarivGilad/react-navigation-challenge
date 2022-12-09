import {StyleSheet} from 'react-native';
import {baseContainerStyles} from '../../../base-styles/container.styles';
import {COLORS, FONTS, MARGIN} from '../../../constants/style.constants';

interface iForgotPasswordScreenStyles {
  container: object;
  title: object;
  subtitle: object;
}
const styles = StyleSheet.create<iForgotPasswordScreenStyles>({
  container: {
    ...baseContainerStyles.container,
    ...baseContainerStyles.vbox,
    backgroundColor: COLORS.secondaryLight,
  },
  title: {
    fontSize: FONTS.size.xxl,
    color: COLORS.white,
    margin: MARGIN.sm,
  },
  subtitle: {
    fontSize: FONTS.size.lg,
    // color: COLORS.white,
  },
});
export default styles;
