/* eslint react/prop-types: 0 */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

import * as locationsActions from '../redux-saga/actions/locationsActions';

class Locations extends Component {
    componentDidMount() {
        console.log('Locations Initial Props...', this.props);
    }

    handleUpdateDisplayDate = () => {
        console.log('Entered handleUpdateDisplayDate()...');
        this.props.actions.updateLocationDate('Showing ML');
    }

    render() {
        return (
            <LocationsStyle>
                <h1>{this.props.title}</h1>
                <p>Create | Update | Delete Locations</p>

                <button onClick={this.handleUpdateDisplayDate}>Update Date</button>
            </LocationsStyle>
        )
    }
}

const LocationsStyle = styled.div`
    margin: 65px auto;
`;

const mapStateToProps = ({ locations }) => ({
    title: locations.title
});

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators({ ...locationsActions }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
