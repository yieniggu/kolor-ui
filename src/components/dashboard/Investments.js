import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInvestments } from "../../actions/token";
import { Investment } from "./Investment";

export const Investments = () => {
  const { checkingInvestments, investments } = useSelector(
    (state) => state.token
  );

  console.log(investments);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!investments) {
      dispatch(getInvestments());
    }
  }, []);

  return (
    <div className="col-4">
      {checkingInvestments ? (
        <h4>Checking...</h4>
      ) : (
        <div>
          <h3>Investments</h3>
          {investments.map((investment, id) => (
            <Investment key={id} investment={investment} index={id} />
          ))}
        </div>
      )}
    </div>
  );
};
