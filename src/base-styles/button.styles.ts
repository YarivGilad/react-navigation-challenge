import {
  COLORS,
  FONTS,
  MARGIN,
  PADDING,
  RADIUS,
} from '../constants/style.constants';

/**
 * Buttons
 */
export const baseButtonStyles = {
  gradientButton: {
    wrapper: {
      width: '100%',
      marginVertical: 12,
      shadowColor: COLORS.black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.6,
      shadowRadius: RADIUS.sm,
      elevation: 5,
    },
    linearGradient: {
      width: '100%',
      borderRadius: RADIUS.lg,
    },
    button: {
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: 55,
    },
    buttonLabel: {
      fontFamily: FONTS.family.primary,
      color: COLORS.white,
      fontSize: 16,
      fontWeight: '400',
    },
  },
  linkButtonLabel: {
    fontFamily: FONTS.family.primary,
    fontWeight: FONTS.weight.bolder,
    fontSize: FONTS.size.sm,
    color: COLORS.primary,
    textAlign: 'center',
  },
  flatButton: {
    button: {
      backgroundColor: COLORS.secondaryLight,
      padding: PADDING.md,
      margin: MARGIN.sm,
      borderRadius: RADIUS.md,
      fontSize: FONTS.size.md,
    },
    label: {
      color: COLORS.white,
      fontFamily: FONTS.family.primary,
      fontSize: FONTS.size.sm,
      fontWeight: FONTS.weight.bolder,
      textAlign: 'center',
      textTransform: 'uppercase',
    },
  },
};
