import React from "react";
import {RegisteredLand} from "./RegisteredLand"

export class LandList extends React.Component {
    renderRegisteredLand(landData) {
		{var vcu_co2_mult = 100}
        return <RegisteredLand land_image={landData['land_image']} id={landData['id']} co2_total={landData['vcu_projected']*vcu_co2_mult} co2_bought={landData['vcu_sold']*vcu_co2_mult}
			coordinates={landData['coordinates']} purchase_date={landData['purchase_date']} liberation_date={landData['liberation_date']} profit={landData['profit']}/>;
    }
    render() {
        var landCards =  this.props.lands
        var cards = []
        for (var i=0; i < landCards.length; i++) {
            cards.push(this.renderRegisteredLand(landCards[i]))
            cards.push(<br/>)
        }        
        return (
            <div>
                {cards}
            </div>
        );
    }
}