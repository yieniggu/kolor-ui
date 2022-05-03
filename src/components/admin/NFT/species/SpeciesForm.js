import React from "react";
import { useSelector } from "react-redux";
import { oneYearInSeconds } from "../../../../utils/web3Utils";

export const SpeciesForm = ({
  speciesAttributes,
  handleInputChange,
  reset,
  setSpecies,
}) => {
  const {
    speciesAlias,
    scientificName,
    density,
    /* size, */ initialTCO2perYear,
  } = speciesAttributes;

  const { mintingNFT } = useSelector((state) => state.NFT);

  const createSpecies = () => {
    return {
      speciesAlias,
      scientificName,
      density,
      //size,
      initialTCO2perYear,
      TCO2perSecond: initialTCO2perYear / oneYearInSeconds,
    };
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newSpecies = createSpecies();

    setSpecies((species) => [...species, newSpecies]);
    console.log(newSpecies);

    reset();
  };

  return (
    <div>
      <h3 className="text-center">Add new Species</h3>

      <form className="container" onSubmit={handleAdd}>
        <div className="form-floating">
          <input
            id="speciesAlias"
            type="text"
            name="speciesAlias"
            className="form-control"
            placeholder="0x1234..."
            autoComplete="off"
            value={speciesAlias}
            onChange={handleInputChange}
            disabled={mintingNFT}
          />
          <label htmlFor="speciesAlias">Species Alias</label>
        </div>
        <br />
        <div className="form-floating">
          <input
            id="scientificName"
            type="text"
            name="scientificName"
            className="form-control"
            placeholder="0x1234..."
            autoComplete="off"
            value={scientificName}
            onChange={handleInputChange}
            disabled={mintingNFT}
          />
          <label htmlFor="scientificName">Species Scientific Name</label>
        </div>
        <br />
        <div className="form-floating">
          <input
            id="density"
            type="number"
            name="density"
            className="form-control"
            placeholder="0x1234..."
            autoComplete="off"
            value={density}
            onChange={handleInputChange}
            disabled={mintingNFT}
            min={0}
            max={100}
            step={0.0001}
          />
          <label htmlFor="density">Density (%)</label>
        </div>
        <br />
        {/* <div className="form-floating">
          <input
            id="size"
            type="number"
            name="size"
            className="form-control"
            placeholder="0x1234..."
            autoComplete="off"
            value={size}
            onChange={handleInputChange}
            disabled={mintingNFT}
            min={0}
            step={0.0001}
          />
          <label htmlFor="size">Size (m2)</label>
        </div> */}
        <br />
        <div className="form-floating">
          <input
            id="initialTCO2perYear"
            type="number"
            name="initialTCO2perYear"
            className="form-control"
            placeholder="0x1234..."
            autoComplete="off"
            value={initialTCO2perYear}
            onChange={handleInputChange}
            disabled={mintingNFT}
            min={0}
            step={0.00001}
          />
          <label htmlFor="initialTCO2perYear">TCO2 per Year</label>
        </div>
        <br />
        <div className="d-grip gap-2 d-md-flex justify-content-md-end">
          <button
            className="btn btn-outline-success me-md-2"
            type="submit"
            disabled={mintingNFT}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
