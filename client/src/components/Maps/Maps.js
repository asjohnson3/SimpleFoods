import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 40.7359,
      lng: -73.9911
    },
    zoom: 17
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBFlPuI4M4lSIitF4APyB6fktZW6PtdX6w" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {/* <AnyReactComponent
            lat={73.9911}
            lng={40.7359}
            text={'Kreyser Avrora'}
          /> */}
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;