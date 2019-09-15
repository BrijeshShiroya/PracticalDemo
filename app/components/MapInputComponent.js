import React, {Component} from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_API_KEY} from '../constants/Key';
class MapInputComponent extends Component {
  render() {
    return (
      <GooglePlacesAutocomplete
        placeholder="Search"
        minLength={2}
        autoFocus={true}
        returnKeyType={'search'}
        listViewDisplayed={false}
        fetchDetails={true}
        onPress={(data, details = null) => {
          this.props.notifyChange({
            lat: details.geometry.location.lat,
            lng: details.geometry.location.lng,
            formatted_address: details.formatted_address,
          });
        }}
        query={{
          key: GOOGLE_API_KEY,
          language: 'en',
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={200}
      />
    );
  }
}

export default MapInputComponent;
