import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import MapView from 'react-native-maps';
import api from '../Utils/api';

var styles= StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default class Map extends React.Component {
  constructor(){
    super();
    this.state = {
      markers: {}
    }
  }
  componentWillMount(){
    api.getMarkers()
      .then((res) => {
        this.setState({
          markers: res
        });
      })
  }
  getLat(event){
    console.log(event.nativeEvent.coordinate, event.nativeEvent.position)
    api.addMarker(event.nativeEvent.coordinate.latitude, event.nativeEvent.coordinate.longitude)
  }
  renderMarkers(){
    console.log(this.state.markers)
    var mark = markers.map((marker) => {
      return (
        <MapView.marker
        coordinate={{
          "latitude": marker.latitude,
          "longitude": marker.longitude
        }}
        title="Titleee"
        descrition="description"
        />
      );
    });
  }
  render(){
    var result = JSON.parse(this.state.markers)
    console.log(result)
    return(
      <MapView
        style={styles.map}
        showsUserLocation={true}
        followsUserLocation={true}
        onPress={this.getLat.bind(this)}
      >
          <MapView.Marker
            coordinate={{
              "latitude": 37.78727876432652,
              "longitude": -122.4074169997142
            }}
            title="marker.title}"
            description="{marker.description}"
          />
      </MapView>
    );
  }
};
