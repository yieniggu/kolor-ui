import React from "react";

export const SpeciesForm = ({
  speciesAttributes,
  handleInputChange,
  reset,
  setSpecies,
}) => {
  const { speciesAlias, scientificName, density, size, TCO2perSecond } =
    speciesAttributes;

  const createSpecies = () => {
    return {
      speciesAlias,
      scientificName,
      density,
      size,
      TCO2perSecond,
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
            min={0}
            max={100}
            step={0.0001}
          />
          <label htmlFor="density">Density</label>
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
          <label htmlFor="size">Size (m2)</label>
        </div>
        <br />
        <div className="form-floating">
          <input
            id="TCO2perSecond"
            type="number"
            name="TCO2perSecond"
            className="form-control"
            placeholder="0x1234..."
            autoComplete="off"
            value={TCO2perSecond}
            onChange={handleInputChange}
            min={0}
            step={0.0000000001}
          />
          <label htmlFor="TCO2perSecond">TCO2 per Second</label>
        </div>
        <br />
        <div className="d-grip gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-outline-success me-md-2" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
