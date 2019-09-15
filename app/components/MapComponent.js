import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import styles from './styles/MapComponentStyles';

const MapComponent = props => {
  return (
    <MapView
      showsUserLocation
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      region={props.region}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      onRegionChange={reg => props.onRegionChange(reg)}>
      <Marker coordinate={props.region} />
    </MapView>
  );
};

export default MapComponent;
