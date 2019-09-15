import React from 'react';
// import PropTypes from 'prop-types';
import {ActivityIndicator, View} from 'react-native';
import styles from './styles/LoaderStyle';
import {Colors} from '../theme';

// eslint-disable-next-line complexity
export const Loader = ({show, size, color, style}) => {
  if (show) {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          animating={show}
          size={size || 'small'}
          color={color || Colors.black}
          style={style || styles.loaderComponent}
        />
      </View>
    );
  }
  return null;
};
export default {Loader};
