import React, { Component } from "react";

export default class GoogleMap extends Component {
  componentDidMount() {
    new GoogleMap.maps.Map(this.ref.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  render() {
    return <div ref="map" />;
  }
}
