import React, { useEffect } from "react";

export const NFTMintingForm = ({ landAttributes, handleInputChange }) => {
  const {
    toAddress,
    name,
    landOwnerAlias,
    size,
    country,
    stateOrRegion,
    city,
  } = landAttributes;

  return (
    <div>
      <h2 className="text-center">Land NFT minting</h2>
      <form className="container">
        <div className="form-floating">
          <input
            id="toAddress"
            type="text"
            name="toAddress"
            className="form-control"
            placeholder="0x1234..."
            autoComplete="off"
            value={toAddress}
            onChange={handleInputChange}
          />
          <label htmlFor="toAddress">Land Owner Address</label>
        </div>
        <br />
        <div className="form-floating">
          <input
            id="name"
            type="text"
            name="name"
            className="form-control"
            placeholder="0x1234..."
            autoComplete="off"
            value={name}
            onChange={handleInputChange}
          />
          <label htmlFor="name">Land Name</label>
        </div>
        <br />
        <div className="form-floating">
          <input
            id="landOwnerAlias"
            type="text"
            name="landOwnerAlias"
            className="form-control"
            placeholder="Netflix"
            autoComplete="off"
            value={landOwnerAlias}
            onChange={handleInputChange}
          />
          <label htmlFor="landOwnerAlias">Land Owner Alias</label>
        </div>
        <br />
        <div className="form-floating">
          <input
            id="size"
            type="number"
            name="size"
            className="form-control"
            placeholder="0x1234..."
            autoComplete="off"
            value={size}
            onChange={handleInputChange}
            min={0}
            step={0.0001}
          />
          <label htmlFor="size">Land Size (m2)</label>
        </div>
        <br />
        <div className="form-floating">
          <input
            id="country"
            type="text"
            name="country"
            className="form-control"
            placeholder="0x1234..."
            autoComplete="off"
            value={country}
            onChange={handleInputChange}
          />
          <label htmlFor="country">Country</label>
        </div>
        <br />
        <div className="form-floating">
          <input
            id="stateOrRegion"
            type="text"
            name="stateOrRegion"
            className="form-control"
            placeholder="0x1234..."
            autoComplete="off"
            value={stateOrRegion}
            onChange={handleInputChange}
          />
          <label htmlFor="stateOrRegion">State or Region</label>
        </div>
        <br />
        <div className="form-floating">
          <input
            id="city"
            type="text"
            name="city"
            className="form-control"
            placeholder="0x1234..."
            autoComplete="off"
            value={city}
            onChange={handleInputChange}
          />
          <label htmlFor="city">City</label>
        </div>
        <br />
      </form>
      <br />
    </div>
  );
};
