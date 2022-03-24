import React from "react";
import {RegisteredLand} from "./RegisteredLand"

export class LandList extends React.Component {
    renderRegisteredLand(landData) {
        return <RegisteredLand land_image={landData['land_image']} id={landData['id']} co2_total={landData['co2_total']} co2_bought={landData['co2_bought']}
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