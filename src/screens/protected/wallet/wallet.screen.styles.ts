import {StyleSheet} from 'react-native';
import {baseContainerStyles} from '../../../base-styles/container.styles';
import {COLORS, FONTS} from '../../../constants/style.constants';

interface iWalletScreenStyles {
  container: object;
  title: object;
}
const styles = StyleSheet.create<iWalletScreenStyles>({
  container: {
    ...baseContainerStyles.container,
    ...baseContainerStyles.vbox,
    backgroundColor: COLORS.tertiary,
  },
  title: {
    fontSize: FONTS.size.xxl,
    color: COLORS.white,
  },
});
export default styles;
