import React, {Component} from 'react';
import {View, FlatList, Text} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import CustomHeader from '../../components/CustomHeader';
import * as string from '../../constants/Strings';
import styles from './styles/SearchListStyles';
class SearchList extends Component {
  componentDidMount() {
    console.log(this.props.location);
  }
  renderEmptyView() {
    return (
      <View style={styles.empty}>
        <Text style={styles.emptyText}>No Location</Text>
      </View>
    );
  }
  _renderItem(item) {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{item.formatted_address}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <CustomHeader
          title={string.locationListHeader}
          onBackPress={() => this.props.navigation.goBack()}
        />
        <FlatList
          data={this.props.location}
          style={styles.flatlist}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({item}) => this._renderItem(item)}
          ListEmptyComponent={this.renderEmptyView()}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  location: state.autoComplete.location,
});

SearchList.propType = {
  location: PropTypes.array,
  error: PropTypes.string,
};

export default connect(
  mapStateToProps,
  null,
)(SearchList);
