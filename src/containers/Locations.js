/* eslint react/prop-types: 0 */

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styled from "@emotion/styled";

import * as locationsActions from "../redux-saga/actions/locationsActions";
import LocationsList from "../components/locations/LocationsList";

class Locations extends Component {
  componentDidMount() {
    console.log("Locations Initial Props...", this.props);
    this.props.actions.locationsLoadList();
  }

  shouldRenderLocationsList = () => {
    console.log(this.props.locationsList);
    return this.props.locationsList && this.props.locationsList.length;
  };

  render() {
    return (
      <LocationsStyle>
        <h1>{this.props.title}</h1>
        {this.shouldRenderLocationsList && (
          <LocationsList locationsList={this.props.locationsList} />
        )}
      </LocationsStyle>
    );
  }
}

const LocationsStyle = styled.div`
  margin: 75px 10%;
`;

const mapStateToProps = ({ locations }) => ({
  title: locations.title,
  locationsList: locations.locationsList,
});

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ ...locationsActions }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
