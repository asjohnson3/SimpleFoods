// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
 
// // const AnyReactComponent = ({ text }) => <div>{text}</div>;

// const address = "4 Union Square W S, New York, NY 10003";
 
// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 40.7359,
//       lng: -73.9911
//     },
//     zoom: 17,
//     type:['lodging']
//   };
 
//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '100vh', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: "AIzaSyBFlPuI4M4lSIitF4APyB6fktZW6PtdX6w" }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//           type={this.props.type}
//         >

//         </GoogleMapReact>
//       </div>
//     );
//   }
// }
 
// export default SimpleMap;

// import React from 'react';
// import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
// // import Paper from 'material-ui/Paper';
// // import Typography from 'material-ui/Typography';
// // import { typography } from 'material-ui/styles';
// class GoogleMapsContainer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showingInfoWindow: false,
//       activeMarker: {},
//       selectedPlace: {}
//     }
//     // binding this to event-handler functions
//     this.onMarkerClick = this.onMarkerClick.bind(this);
//     this.onMapClick = this.onMapClick.bind(this);
//   }
//   onMarkerClick = (props, marker, e) => {
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true
//     });
//   }
//   onMapClick = (props) => {
//     if (this.state.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null
//       });
//     }
//   }
//   render() {
//     const style = {
//       width: '50vw',
//       height: '75vh',
//       'marginLeft': 'auto',
//       'marginRight': 'auto'
//     }
//     return (
//         <div style={{ height: '100vh', width: '100%' }}>
//             <Map
//                 item
//                 xs = { 12 }
//                 style = { style }
//                 google = { this.props.google }
//                 onClick = { this.onMapClick }
//                 zoom = { 14 }
//                 initialCenter = {{ lat: 40.7359, lng: -73.9911 }}
//             >
//                 <Marker
//                 onClick = { this.onMarkerClick }
//                 title = { 'Changing Colors Garage' }
//                 position = {{ lat: 40.7359, lng: -73.9911 }}
//                 name = { 'Changing Colors Garage' }
//                 />
//                 <InfoWindow
//                 marker = { this.state.activeMarker }
//                 visible = { this.state.showingInfoWindow }
//                 >
//                 {/* <Paper>
//                     <Typography
//                     variant = 'headline'
//                     component = 'h4'
//                     >
//                     Changing Colors Garage
//                     </Typography>
//                     <Typography
//                     component = 'p'
//                     >
//                     98G Albe Dr Newark, DE 19702 <br />
//                     302-293-8627
//                     </Typography>
//                 </Paper> */}
//                 </InfoWindow>
//             </Map>
//         </div>
      
//     );
//   }
// }
// export default GoogleApiWrapper({
//     api: ("AIzaSyBFlPuI4M4lSIitF4APyB6fktZW6PtdX6w")
// })(GoogleMapsContainer)

/*global google*/
import React from "react"
import { compose, withProps, withHandlers, withState } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100vh` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
    withState('places', 'updatePlaces', ''),
    withHandlers(() => {
        const refs = {
            map: undefined,
        }

        return {
            onMapMounted: () => ref => {
                refs.map = ref
            },
            fetchPlaces: ({ updatePlaces }) => {
                let places;
                const bounds = refs.map.getBounds();
                const service = new google.maps.places.PlacesService(refs.map.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED);
                const request = {
                    bounds: bounds,
                    type: ['supermarket']
                };
                service.nearbySearch(request, (results, status) => {
                    if (status == google.maps.places.PlacesServiceStatus.OK) {
                        console.log(results);
                        updatePlaces(results);
                    }
                })
            }
        }
    }),
)((props) => {
    return (
        <GoogleMap
            onTilesLoaded={props.fetchPlaces}
            ref={props.onMapMounted}
            onBoundsChanged={props.fetchPlaces}
            defaultZoom={16}
            defaultCenter={{ lat: 40.7359, lng: -73.9911 }}
        >
            {props.places && props.places.map((place, i) =>
                <Marker key={i} position={{ lat: place.geometry.location.lat(), lng: place.geometry.location.lng() }} />
            )}
            <Marker
      position={{ lat: 40.7359, lng: -73.9911 }}
      onClick={props.onToggleOpen}
    >
      {/* {props.isOpen && <InfoBox
        onCloseClick={props.onToggleOpen}
        options={{ closeBoxURL: ``, enableEventPropagation: true }}
      >
        <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
          <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
            Hello, Kaohsiung!
          </div>
        </div>
      </InfoBox>} */}
    </Marker>
        </GoogleMap>
    )
})

export default class MyFancyComponent extends React.PureComponent {
    render() {
        return (
            <MyMapComponent />
        )
    }
}