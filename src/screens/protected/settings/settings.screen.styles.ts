import {StyleSheet} from 'react-native';
import {baseContainerStyles} from '../../../base-styles/container.styles';
import {COLORS, FONTS, MARGIN} from '../../../constants/style.constants';

interface iSettingsScreenStyles {
  container: object;
  title: object;
}
const styles = StyleSheet.create<iSettingsScreenStyles>({
  container: {
    ...baseContainerStyles.container,
    ...baseContainerStyles.vbox,
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: FONTS.size.xxl + 4,
    color: COLORS.black,
    margin: MARGIN.lg,
  },
});
export default styles;
