import {StyleSheet} from 'react-native';
import {COLORS, RADIUS} from '../../../constants/style.constants';
import {baseFormStyles} from '../../../base-styles/form.styles';

interface iPasswordInputStyles {
  container: object;
  input: object;
}

const styles = StyleSheet.create<iPasswordInputStyles>({
  container: {
    borderColor: COLORS.greyLight,
    borderWidth: 1,
    backgroundColor: 'white',
    height: 55,
    paddingRight: 10,
    borderRadius: RADIUS.md,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    ...baseFormStyles.textInput,
    borderWidth: 0,
    height: 50,
    flex: 1,
  },
});
export default styles;
