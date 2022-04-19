import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOffsetRequest } from "../../../actions/offset";
import { useForm } from "../../../hooks/useForm";

import "../../auth/login.css";

export const OffsetForm = () => {
  const dispatch = useDispatch();

  const { NFT } = useSelector((state) => state.NFT);
  const { sendingRequest } = useSelector((state) => state.offset);

  const [formValues, handleInputChange] = useForm({
    name: "",
    lastName: "",
    email: "client@kolor.com",
    phone: "",
    VCUs: 1,
    company: "",
    comments: "Hey there! I want more info...",
  });

  const { name, lastName, email, phone, VCUs, company, comments } = formValues;

  const newOffsetRequest = () => {
    return {
      tokenId: NFT.tokenId,
      email,
      VCUs,
      phone,
      name,
      lastName,
      company,
      comments,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestDetails = newOffsetRequest();
    dispatch(createOffsetRequest(requestDetails));
  };

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col">
          <h3 className="text-center">Solicitud de compra VCU</h3>
          <form onSubmit={handleSubmit} className="pt-4">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                value={name}
                onChange={handleInputChange}
                disabled={sendingRequest}
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                name="lastName"
                value={lastName}
                onChange={handleInputChange}
                disabled={sendingRequest}
              />
              <label htmlFor="lastName">Last Name</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                placeholder="client@kolor.com"
                name="email"
                value={email}
                onChange={handleInputChange}
                disabled={sendingRequest}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                placeholder="+569 87654321"
                name="phone"
                value={phone}
                onChange={handleInputChange}
                disabled={sendingRequest}
              />
              <label htmlFor="phone">Phone number</label>
            </div>
            <div className="form-floating">
              <input
                type="number"
                className="form-control"
                placeholder="VCUs a compensar"
                name="VCUs"
                value={VCUs}
                min={1}
                step={0.01}
                onChange={handleInputChange}
                disabled={sendingRequest}
              />
              <label htmlFor="VCUs">VCUs</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                placeholder="Empresa"
                name="company"
                value={company}
                onChange={handleInputChange}
                disabled={sendingRequest}
              />
              <label htmlFor="company">Company Name</label>
            </div>
            <div className="form-floating">
              <textarea
                className="form-control comments-box"
                placeholder="Extra comments..."
                name="comments"
                value={comments}
                onChange={handleInputChange}
                disabled={sendingRequest}
              ></textarea>
              <label htmlFor="comments">Comments</label>
            </div>
            <div className="form-floating text-center">
              <input type="submit" className="btnKolor" value="Kolor!" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
