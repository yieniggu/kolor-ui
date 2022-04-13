import React from "react";
import {LandCard} from "./LandCard"

export class LandList extends React.Component {
    renderLandCard(landData) {
		{var vcu_token_mult = 100}
        return <LandCard land_image={landData['land_image']} id={landData['id']} vcu_generated={landData['vcu_generated']} total_tokens={landData['vcu_total']*vcu_token_mult}
			available_tokens={(landData['vcu_projected']-landData['vcu_sold'])*vcu_token_mult} coordinates={landData['coordinates']}/>;
    }
    render() {
        var landCards =  this.props.lands;
        var cards = []
        for (var i=0; i < landCards.length; i++) {
            cards.push(this.renderLandCard(landCards[i]))
            cards.push(<br/>)
        }        
        return (
            <div>
                {cards}
            </div>
        );
    }
}