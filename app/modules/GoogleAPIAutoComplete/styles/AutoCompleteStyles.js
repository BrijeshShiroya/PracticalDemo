import {StyleSheet} from 'react-native';
import {Fonts, Colors} from '../../../theme';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  mapContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  textInput: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
  },
  searchButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    height: 30,
    width: 100,
    borderRadius: 12,
    backgroundColor: Colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: Fonts.type.helvetica,
    fontSize: Fonts.size.h1,
    fontWeight: '100',
  },
});
