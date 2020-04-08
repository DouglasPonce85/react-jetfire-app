/* eslint react/prop-types: 0 */

import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as homeActions from '../redux-saga/actions/homeActions';

class Home extends Component {
    updateDateTime = () => {
        console.log('Im Clicked... ');
        this.props.actions.displayDate();
    }

    render() {
        return (
            <div className="jumbotron">
                <h1>{ this.props.title }</h1>
                <p>{ this.props.currentDate }</p>

                <button onClick={this.updateDateTime}>Update Date</button>

                <Link to="about" className="btn btn-primary btn-lg">About</Link>
            </div>
        )
    }
}

export const mapStateToProps = ({ home }) => ({
    title: home.title,
    currentDate: home.currentDate
});

export function mapDispatchToProps(dispatch) {
    const actions = bindActionCreators({ ...homeActions }, dispatch);
    return { actions };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
