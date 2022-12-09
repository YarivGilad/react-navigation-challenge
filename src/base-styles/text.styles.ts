import {FONTS, COLORS, MARGIN} from '../constants/style.constants';

/**
 * Typography - Text elements
 */
export const baseTextStyles = {
  heading1: {
    fontFamily: FONTS.family.primary,
    fontSize: FONTS.size.lg,
    lineHeight: FONTS.size.xl,
    fontWeight: FONTS.weight.bold,
    color: COLORS.black,
    marginVertical: MARGIN.md,
  },

  heading2: {
    fontFamily: FONTS.family.primary,
    fontSize: FONTS.size.md,
    fontWeight: FONTS.weight.bold,
    lineHeight: FONTS.size.xl,
    color: COLORS.black,
  },

  heading3: {
    fontFamily: FONTS.family.primary,
    fontSize: FONTS.size.sm,
    fontWeight: FONTS.weight.bold,
    lineHeight: FONTS.size.xl,
    color: COLORS.black,
  },

  bodyText: {
    fontFamily: FONTS.family.secondary,
    fontSize: FONTS.size.lg,
    fontWeight: FONTS.weight.normal,
    lineHeight: FONTS.size.xl,
    color: COLORS.greyLight,
  },
};
