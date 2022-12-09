import {StyleSheet} from 'react-native';
import {baseContainerStyles} from '../../../base-styles/container.styles';
import {COLORS, FONTS} from '../../../constants/style.constants';

interface iHomeScreenStyles {
  container: object;
  title: object;
}
const styles = StyleSheet.create<iHomeScreenStyles>({
  container: {
    ...baseContainerStyles.container,
    ...baseContainerStyles.vbox,
    backgroundColor: COLORS.secondaryLight,
  },
  title: {
    fontSize: FONTS.size.xxl,
    color: COLORS.white,
  },
});
export default styles;
