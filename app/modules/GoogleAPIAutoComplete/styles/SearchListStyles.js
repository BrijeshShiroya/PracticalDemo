import {StyleSheet} from 'react-native';
import {Fonts} from '../../../theme';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  flatlist: {
    height: '100%',
    width: '100%',
  },
  empty: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 20,
    fontWeight: '800',
    fontFamily: Fonts.type.h1,
  },
  itemContainer: {
    padding: 20,
    height: 55,
    width: '100%',
    justifyContent: 'center',
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: 'lightgrey',
  },
  itemText: {
    fontFamily: Fonts.type.helvetica,
    fontSize: Fonts.size.h2,
  },
});
