import React from "react";

export const PointsForm = ({
  pointAttributes,
  handleInputChange,
  reset,
  setPoints,
}) => {
  const { latitude, longitude } = pointAttributes;

  const createpoint = () => {
    return {
      latitude,
      longitude,
    };
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newPoint = createpoint();
    console.log(newPoint);

    setPoints((points) => [...points, newPoint]);

    reset();
  };

  return (
    <div>
      <h3>Add new point</h3>

      <form className="container" onSubmit={handleAdd}>
        <div className="form-floating">
          <input
            id="latitude"
            type="number"
            name="latitude"
            className="form-control"
            placeholder="0x1234..."
            autoComplete="off"
            value={latitude}
            onChange={handleInputChange}
            step={0.0001}
          />
          <label htmlFor="latitude">Latitude</label>
        </div>
        <br />
        <div className="form-floating">
          <input
            id="longitude"
            type="number"
            name="longitude"
            className="form-control"
            placeholder="0x1234..."
            autoComplete="off"
            value={longitude}
            onChange={handleInputChange}
            step={0.0001}
          />
          <label htmlFor="Longitude">Longitude (m2)</label>
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
