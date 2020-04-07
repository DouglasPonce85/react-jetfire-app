/* eslint react/prop-types: 0 */

import React from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

const SideBar = ({ location, history }) => {
    return (
        <SideNav
            onSelect={(selected) => {
                const newTo = '/' + selected;
                console.log('New Route Request >> ', newTo);
                if (location.pathname !== newTo) {
                    history.push(newTo);
                }
            }}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="products">
                <NavItem eventKey="products">
                    <NavIcon>
                        <i className="fa fa-fw fa-barcode" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Products
            </NavText>
                </NavItem>
                <NavItem eventKey="charts">
                    <NavIcon>
                        <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Charts
            </NavText>
                    <NavItem eventKey="charts/linechart">
                        <NavText>
                            Line Chart
                </NavText>
                    </NavItem>
                    <NavItem eventKey="charts/barchart">
                        <NavText>
                            Bar Chart
                </NavText>
                    </NavItem>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    )
}

export default SideBar;