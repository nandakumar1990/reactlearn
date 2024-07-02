import React, { Component } from "react";
import {Map, } from "google-maps-react";

const mapStyles = {
    width: "100%",
    height: "100%",
};

class GoogleMap extends Component{
    render(){
        return(
            <Map
            google={this.props.googyle}
            zoom={14}
            style={mapStyles}
            initialCenter={{
                lat: 37.774929,
                lng: -122.419416,
            }}
            >
                <marker
            </Map>
        )
    }
}