import React from "react";
import { Link } from "react-router-dom";

export const OffsetCard = ({ offsetRequest }) => {
  const {
    _id,
    name,
    lastName,
    email,
    phone,
    VCUs,
    tokenId,
    company,
    comments,
  } = offsetRequest;

  return (
    <div>
      <div className="col container mb-3">
        <div className="card">
          <div className="row no-gutters">
            <div className="col-4 flex-column">
              <img src="assets/request.png" alt={name} className="card-img" />
              <Link to={`/offset-requests/${_id}`}>
                <button className="btn btn-primary w-100">Details</button>
              </Link>
              <Link to={`/lands/${tokenId}`}>
                <button className="btn btn-outline-primary w-100 mt-4">
                  Land Details
                </button>
              </Link>
            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title">
                  Request:<b> {_id}</b>
                </h5>
                <p className="card-text">
                  Person:{" "}
                  <b>
                    {name} {lastName}
                  </b>
                </p>
                <p className="card-text">
                  Email: <b>{email}</b>
                </p>
                <p className="card-text">
                  Phone: <b>{phone}</b>
                </p>
                <p className="card-text">
                  VCUs to invest: <b>{VCUs}</b>
                </p>
                <p className="card-text">
                  Company: <b>{company}</b>
                </p>
                <p className="card-text">
                  Extra comments: <b>{comments}</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
