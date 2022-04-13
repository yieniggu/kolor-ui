import React from "react";
import {LandList} from "./LandList"
import { useStore } from 'react-redux'

export const DashboardScreen_Client = () => {
  const store = useStore();
  return (
    <>
	<h1>Client Dashboard</h1>
	<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr", gridGap: "10px", borderStyle: "solid", borderRadius: "5px" }}>
		<div>
			<p>Land spot</p>
		</div>
		<div>
			<p>CO₂ Total</p>
		</div>
		<div>
			<p>CO₂ Comprado</p>
		</div>
		<div>
			<p>Fecha de publicación</p>
		</div>
		<div>
			<p>Fecha de liberación de fondos</p>
		</div>
		<div>
			<p>Ganancias y proyección</p>//50% de tokens comprados            
        </div>
	</div>
    <div>
        {<LandList lands={store.getState().lands} />}
    </div>
	</>
  );
};