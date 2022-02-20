import React, { useContext } from "react";
import { useForm } from "../../../hooks/UIHook";
import { Web3Context } from "../../../hooks/Web3Context";
import { v4 as uuidv4 } from "uuid";
import { NFTMintingContext } from "../../../hooks/NFTMintingContext";

export const NFTMintingForm = () => {
  const { loading, error, loadingMessage, setLoadingMessage, account } =
    useContext(Web3Context);

  const { attributes, setAttributes } = useContext(NFTMintingContext);

  const { landAttributes, species } = attributes;

  const [
    { toAddress, name, landOwnerAlias, size, country, stateOrRegion, city },
    handleInputChange,
    reset,
  ] = useForm({
    toAddress: "",
    name: "",
    landOwnerAlias: "",
    size: 0,
    country: "",
    stateOrRegion: "",
    city: "",
  });

  const handleSave = async (e) => {
    e.preventDefault();
    // console.log("to: ", toAddress);
    // console.log("name: ", name);
    // console.log("landOwnerAlias: ", landOwnerAlias);
    // console.log("size: ", size);
    // console.log("country: ", country);
    // console.log("stateOrRegion: ", stateOrRegion);
    // console.log("city: ", city);
    const identifier = uuidv4();
    // console.log("identifier: ", identifier);
    const newLandAttributes = {
      toAddress,
      name,
      landOwnerAlias,
      size,
      country,
      stateOrRegion,
      city,
      identifier,
    };
    setAttributes({ ...attributes, landAttributes: newLandAttributes });
  };

  return (
    <div className="col-6">
      <h2 className="text-center">Land NFT minting</h2>
      <form className="container" onSubmit={handleSave}>
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
        <div className="d-grip gap-2 d-md-flex justify-content-md-end">
          <button
            onClick={reset}
            className="btn btn-outline-danger me-md-2"
            type="button"
          >
            Reset
          </button>
          <button className="btn btn-outline-success me-md-2" type="submit">
            Save
          </button>
        </div>
      </form>
      <br />
    </div>
  );
};
