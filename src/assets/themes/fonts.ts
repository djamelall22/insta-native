import {TextStyle} from 'react-native';

const size = {
  xs: 10,
  sm: 12,
  default: 14,
  md: 16,
  lg: 20,
  xlg: 24,
  xxlg: 30,
};

const weight: {[key: String]: TextStyle['fontWeight']} = {
  extra: 900,
  semi: 600,
  bold: 'bold',
  normal: 'normal',
  thin: 400,
};

export default {size, weight};
