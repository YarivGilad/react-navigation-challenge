import {StyleSheet} from 'react-native';
import {
  COLORS,
  FONTS,
  MARGIN,
  PADDING,
} from '../../../constants/style.constants';
import {baseContainerStyles} from '../../../base-styles/container.styles';
import {baseFormStyles} from '../../../base-styles/form.styles';
import {baseTextStyles} from '../../../base-styles/text.styles';

interface iLoginScreenStyles {
  emailInput: object;
  main: object;
  container: object;
  brandRow: object;
  brandName: object;
  loginContinueTxt: object;
  footer: object;
  footerText: object;
  wFull: object;
  logo: object;
}
const styles = StyleSheet.create<iLoginScreenStyles>({
  emailInput: {
    ...baseFormStyles.textInput,
  },
  main: {
    ...baseContainerStyles.container,
    ...baseContainerStyles.vbox,
    backgroundColor: COLORS.white,
  },
  container: {
    ...baseContainerStyles.container,
    ...baseContainerStyles.vbox,
    padding: PADDING.lg,
    width: '100%',
    position: 'relative',
  },
  wFull: {
    width: '100%',
  },
  brandRow: {
    ...baseContainerStyles.hbox,
  },
  logo: {
    marginRight: 8,
    fill: COLORS.secondaryLight,
    // transform: [{rotate: '30deg'}],
  },
  brandName: {
    ...baseTextStyles.heading1,
    fontSize: FONTS.size.xxl + 8,
    lineHeight: FONTS.size.xxl + 10,
    color: COLORS.primaryDark,
    textAlign: 'center',
    fontWeight: FONTS.weight.bolder,
  },
  loginContinueTxt: {
    ...baseTextStyles.heading1,
    textAlign: 'center',
    fontWeight: FONTS.weight.bold,
    fontSize: FONTS.size.lg,
    color: COLORS.greyLight,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    textAlign: 'center',
    flexDirection: 'row',
  },
  footerText: {
    fontFamily: FONTS.family.primary,
    color: COLORS.greyLight,
    fontWeight: FONTS.weight.bolder,
    marginRight: MARGIN.sm,
  },
});
export default styles;
