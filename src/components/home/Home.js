import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as homeActions from '../../actions/homeActions';

import { Link } from "react-router-dom";

class Home extends Component {
    componentDidMount() {
        console.log('Entered Home [1]...', this.props);
        // this.props.actions.requestNews();
    }

    loadNewOfDay = () => {
        console.log('Im Clicked... ');
        // this.props.actions.requestNews();
    }

    render() {
        return (
            <div className="jumbotron">
                <h1>JetFire App</h1>
                {/* <p>{this.props.newOfDay}</p> */}
                <button onClick={this.loadNewOfDay}>Click Me</button>
                <Link to="about" className="btn btn-primary btn-lg">
                    Learn More
                </Link>
            </div>
        )
    }
}

export const mapStateToProps = ({ home }) => ({
    newOfDay: home.newOfDay,
    message: home.message
});

export function mapDispatchToProps(dispatch) {
    const actions = bindActionCreators({ ...homeActions }, dispatch);
    return { actions };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
