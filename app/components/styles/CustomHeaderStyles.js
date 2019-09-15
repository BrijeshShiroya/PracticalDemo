import {StyleSheet} from 'react-native';
import {Fonts} from '../../theme';
export default styles = StyleSheet.create({
  header: {
    height: 48,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backImage: {
    height: '40%',
    aspectRatio: 1,
  },
  separator: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 0.2,
    backgroundColor: 'lightgrey',
  },
  title: {
    fontFamily: Fonts.type.helvetica,
    fontSize: Fonts.size.h3,
    fontWeight: '700',
  },
});
