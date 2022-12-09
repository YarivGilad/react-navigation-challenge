import {StyleSheet} from 'react-native';
import {baseButtonStyles} from '../../../base-styles/button.styles';

interface iLinkButtonStyles {
  linkButtonLabel: object;
}
const styles = StyleSheet.create<iLinkButtonStyles>({
  linkButtonLabel: {
    ...baseButtonStyles.linkButtonLabel,
  },
});
export default styles;
