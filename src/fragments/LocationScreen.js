import React, { PureComponent } from 'react'
import { StyleSheet } from 'react-native' // prettier-ignore

import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

export default class LocationScreen extends PureComponent {
  state = {
    region: "",
    markers: [
      {
        title: "Lahore",
        coordinates: {
          latitude: 31.5204,
          longitude: 74.3587
        }
      },
      {
        title: "Samanabad Town",
        coordinates: {
          latitude: 31.5377,
          longitude: 74.2972
        }
      },
      {
        title: "Thoker Niaz Baig",
        coordinates: {
          latitude: 31.4914,
          longitude: 74.2385
        }
      },
      {
        title: "Allama Iqbal Town",
        coordinates: {
          latitude: 31.5124,
          longitude: 74.2845
        }
      }
    ]
  };

  render() {

    const LATITUDE_DELTA = 0.0922;
    const LONGITUDE_DELTA = 0.0922;
    return (
      <MapView
        style={styles.container}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        initialRegion={{
          latitude: this.state.markers[0].coordinates.latitude,
          longitude: this.state.markers[0].coordinates.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        }}
        zoomEnabled={true}
        minZoomLevel={5}
      >
        {this.state.markers.map(marker => (
          <Marker
            coordinate={marker.coordinates}
            title={marker.title}
            description={marker.title}
          />
        ))}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});