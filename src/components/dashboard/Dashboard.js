import React from "react";
import {LandList} from "./LandList"

const lands = [
    {
    "land_image":"../../media/SendaDarwin1-6x2ha.png",
	"id":"000",
    "vcu":102.90,
    "total_tokens":102,
    "available_tokens":100,
    "coordinates":"-41.866667,-73.666667",
	"purchase_date":"16-03-2022",
	"liberation_date":"16-04-2022",
	"profit":1000
    }
]

export const Dashboard = () => {
  return (
	<>
	<h1>Landowner Dashboard</h1>
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
        {<LandList lands={lands} />}
    </div>
	</>
  );
};