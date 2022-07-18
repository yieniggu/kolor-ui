import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

export const Investment = ({ investment, index }) => {
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src="/assets/land.png" alt={index} className="img-thumbnail" />

        <Link to={`/lands/${investment[0]}`}>
          <button className="btn btn-primary w-100">Explore land</button>
        </Link>
      </div>
      <div className="col-8">
        <h3>
          Investment <b>{index + 1}</b>
        </h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Tokens bought: </b> {investment[2]}
          </li>
          <li className="list-group-item">
            <b>Token price (in cUSD): </b> ${investment[3]}
          </li>
          <li className="list-group-item">
            <b>Total paid: </b> {investment[2] * investment[3]} $cUSD
          </li>
          <li className="list-group-item">
            <b>Date of purchase: </b>{" "}
            {moment.unix(investment[4]).format("dddd, MMMM Do YYYY, h:mm:ss a")}
          </li>
        </ul>
      </div>
    </div>
  );
};
