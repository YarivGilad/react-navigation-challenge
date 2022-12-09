import {StyleSheet} from 'react-native';
import {baseContainerStyles} from '../../../base-styles/container.styles';
import {COLORS, FONTS} from '../../../constants/style.constants';

interface iNotificationsScreenStyles {
  container: object;
  title: object;
}
const styles = StyleSheet.create<iNotificationsScreenStyles>({
  container: {
    ...baseContainerStyles.container,
    ...baseContainerStyles.vbox,
    backgroundColor: COLORS.tertiaryDark,
  },
  title: {
    fontSize: FONTS.size.xxl,
    color: COLORS.white,
  },
});
export default styles;
