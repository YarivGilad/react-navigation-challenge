import {PADDING, DIMENSIONS} from '../constants/style.constants';

/**
 * Containers
 */
export const baseContainerStyles = {
  vbox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tvbox: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  hbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hlbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  screen: {
    width: DIMENSIONS.fullWidth,
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    //-------
    borderWidth: 2,
    borderColor: 'orange',
    borderStyle: 'dashed',
    //-------
  },
  container: {
    // paddingHorizontal: PADDING.md,
    // paddingVertical: PADDING.lg,
    // width: DIMENSIONS.fullWidth,
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // //-------
    // borderWidth: 3,
    // borderColor: COLORS.primaryDark,
    // //-------
  },
  section: {
    paddingVertical: PADDING.lg,
    paddingHorizontal: PADDING.xl,
    // borderWidth: 3,
  },
};
