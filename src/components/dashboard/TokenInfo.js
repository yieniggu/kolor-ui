import React, { memo, useContext, useMemo } from "react";
import { getERC20Info } from "../../helpers/tokenGetters";
import { useGetERC20Info } from "../../hooks.js/contractsHooks";
import { ContractsContext } from "../ContractsContext";

export const TokenInfo = memo((tokenContract) => {
  //const { _address: ERC20Address } = tokenContract;
  const { address, owner, vault, supply } = useGetERC20Info(tokenContract);

  //const result = useMemo(() => getERC20Info(tokenContract), [tokenContract]);

  //console.log("contract from tokeninfo:", tokenContract);
  //console.log("result: ", result);

  return (
    <div className="row align-items-center">
      <div className="col-8 col-md-6 col-sm-4 ">Minting Form</div>
      <div className="col-4 col-md-3 col-sm-2 animate__animated animate__fadeInRightBig">
        <h2>Kolor Token Info</h2>
        <p>
          Address: <b>{address}</b>
        </p>
        <p>
          Owner: <b>{owner}</b>
        </p>
        <p>
          Vault: <b>{vault}</b>
        </p>
        <p>
          Current supply: <b>{supply}</b>
        </p>
      </div>

      <hr />
    </div>
  );
});
