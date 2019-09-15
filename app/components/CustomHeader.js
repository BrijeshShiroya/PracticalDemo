import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles/CustomHeaderStyles';
import {Icons} from '../assets';

// eslint-disable-next-line complexity
export const CustomHeader = props => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.back} onPress={props.onBackPress}>
        <Image style={styles.backImage} source={Icons.back} />
      </TouchableOpacity>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.separator} />
    </View>
  );
};

CustomHeader.PropTypes = {
  title: PropTypes.string,
  onBackPress: PropTypes.func,
};
export default CustomHeader;
