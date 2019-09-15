import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import MapComponent from '../../components/MapComponent';
import MapInputComponent from '../../components/MapInputComponent';
import {getLocation} from '../../services/LocationService';
import {autoCompleteRequest} from '../../redux/actions/autoCompleteAction';
import * as string from '../../constants/Strings';
import styles from '../GoogleAPIAutoComplete/styles/AutoCompleteStyles';
import {Loader} from '../../components/Loader';
import {Colors} from '../../theme';
import MapView from 'react-native-maps';

class AutoComplete extends Component {
  state = {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  };

  componentDidMount() {
    this.getInitialState();
  }

  getInitialState() {
    getLocation().then(data => {
      this.setState({
        region: {
          latitude: data.latitude,
          longitude: data.longitude,
          latitudeDelta: 0.003,
          longitudeDelta: 0.003,
        },
      });
    });
  }

  containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i] === obj) {
        return true;
      }
    }
    return false;
  }
  getCoordsFromName(loc) {
    if (!this.containsObject(loc, this.props.location)) {
      this.props.storeLocation(loc);
    }
    this.setState({
      region: {
        latitude: loc.lat,
        longitude: loc.lng,
        latitudeDelta: 0.003,
        longitudeDelta: 0.003,
      },
    });
  }

  onMapRegionChange(region) {
    this.setState({region});
  }

  renderSearchListButton() {
    return (
      <TouchableOpacity
        style={styles.searchButton}
        activeOpacity={0.9}
        onPress={() => this.props.navigation.navigate(string.searchListButton)}>
        <Text>Search List</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.region['latitude'] ? (
          <MapComponent
            style={styles.mapContainer}
            region={this.state.region}
            onRegionChange={reg => this.onMapRegionChange(reg)}
          />
        ) : null}
        <View style={styles.textInput}>
          <MapInputComponent
            notifyChange={loc => this.getCoordsFromName(loc)}
          />
        </View>
        {this.renderSearchListButton()}
        <Loader show={this.props.fetching} color={Colors.black} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  fetching: state.autoComplete.fetching,
  location: state.autoComplete.location,
  error: state.autoComplete.error,
});

const mapDispatchToProps = dispatch => ({
  storeLocation: location => dispatch(autoCompleteRequest(location)),
});

AutoComplete.propType = {
  storeLocation: PropTypes.func,
  fetching: PropTypes.bool,
  location: PropTypes.array,
  error: PropTypes.string,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AutoComplete);
