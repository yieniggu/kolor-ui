import React from "react";
import { useSelector } from "react-redux";

export const NFTMintingForm = ({ landAttributes, handleInputChange }) => {
  const { mintingNFT } = useSelector((state) => state.NFT);

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
      <form className="container">
        <div className="form-floating">
          <input
            id="toAddress"
            type="text"
            name="toAddress"
            className="form-control"
            placeholder="0x1234..."
            // autoComplete="off"
            value={toAddress}
            onChange={handleInputChange}
            disabled={true}
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
            // autoComplete="off"
            value={name}
            onChange={handleInputChange}
            disabled={mintingNFT}
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
            // autoComplete="off"
            value={landOwnerAlias}
            onChange={handleInputChange}
            disabled={mintingNFT}
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
            // autoComplete="off"
            value={size}
            onChange={handleInputChange}
            disabled={mintingNFT}
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
            // autoComplete="off"
            value={country}
            onChange={handleInputChange}
            disabled={mintingNFT}
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
            // autoComplete="off"
            value={stateOrRegion}
            onChange={handleInputChange}
            disabled={mintingNFT}
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
            // autoComplete="off"
            value={city}
            onChange={handleInputChange}
            disabled={mintingNFT}
          />
          <label htmlFor="city">City</label>
        </div>
        <br />
      </form>
      <br />
    </div>
  );
};
