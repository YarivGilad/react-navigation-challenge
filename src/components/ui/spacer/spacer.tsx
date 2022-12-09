import React, {FC} from 'react';
import {View} from 'react-native';

interface IProps {
  width?: number;
  height?: number;
}
const Spacer: FC<IProps> = ({width = 5, height = 5}) => {
  return <View style={{width, height}} />;
};
export default Spacer;
