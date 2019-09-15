import {StyleSheet} from 'react-native';
import {Colors} from './';

const type = {
  helvetica: 'HelveticaNeue',
};

const size = {
  h1: 12,
  h2: 16,
  h3: 18,
  h4: 20,
  regular: 16,
  small: 14,
  tiny: 13,
};

const styles = StyleSheet.create({
  h1: {
    fontFamily: type.helvetica,
    fontSize: size.h1,
    fontWeight: 'bold',
    color: Colors.black,
  },
});

export default {
  type,
  size,
  styles,
};
