/* eslint react/prop-types: 0 */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

import * as locationsActions from '../redux-saga/actions/locationsActions';

class Locations extends Component {
    componentDidMount() {
        console.log('Locations Initial Props...', this.props);
        this.props.actions.locationsLoadList();
    }

    shouldRenderLocationsList = () => {
        console.log(this.props.locationsList);
        return this.props.locationsList && this.props.locationsList.length;
    }

    render() {
        return (
            <LocationsStyle>
                <h1>{this.props.title}</h1>
                <h4>Create | Update | Delete Locations</h4>

                { this.shouldRenderLocationsList && (
                    this.props.locationsList.map(location =>
                        <p key={location.id}
                            >{`${location.id} ${location.name}`}
                        </p>)
                )}
            </LocationsStyle>
        )
    }
}

const LocationsStyle = styled.div`
    margin: 75px 10%;
`;

const mapStateToProps = ({ locations }) => ({
    title: locations.title,
    locationsList: locations.locationsList
});

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators({ ...locationsActions }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
