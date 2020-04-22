/* eslint react/prop-types: 0 */

import React from "react";
import styled from "@emotion/styled";

const LocationsList = (props) => {
  return (
    <LocationsListWrapper>
      <table>
        <thead>
          <tr>
            <th />
            <th>ID</th>
            <th>NAME</th>
          </tr>
        </thead>
        <tbody>
          {props.locationsList.map((location) => {
            return (
              <tr key={location.id}>
                <td>
                  <img src={location.imgUrl} alt="" />
                </td>
                <td>{location.id}</td>
                <td>{location.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </LocationsListWrapper>
  );
};

const LocationsListWrapper = styled.div`
  border: 1px solid #e05a60;
  border-radius: 5px;
  box-shadow: 6px 6px 10px rgba(121, 52, 52, 0.28);
  max-width: calc(100% - 2em);
  margin: 1em auto;
  overflow: hidden;
  width: 800px;
  margin-top: 30px;

  img {
    vertical-align: middle;
    border-style: none;
    width: 60px;
    height: 60px;
    border-radius: 50px;
  }

  table {
    width: 100%;

    td,
    th {
      color: #2b686e;
      padding: 10px;
      text-align: center;
      font-size: 18px;
    }

    td {
      text-align: center;
      vertical-align: middle;

      td:last-child {
        font-size: 0.95em;
        line-height: 1.4;
        text-align: left;
      }
    }

    th {
      background-color: #e05a60;
      font-weight: 600;
      color: #f3f0f0;
    }

    tr:nth-child(2n) {
      background-color: white;
    }

    tr:nth-child(2n + 1) {
      background-color: #f3c9cb;
    }
  }
`;

export default LocationsList;
