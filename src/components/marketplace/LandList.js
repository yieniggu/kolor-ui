import React from "react";
import {LandCard} from "./LandCard"

export class LandList extends React.Component {
    renderLandCard(landData) {
        return <LandCard land_image={landData['land_image']} id={landData['id']} vcu={landData['vcu']} total_tokens={landData['total_tokens']}
			available_tokens={landData['available_tokens']} coordinates={landData['coordinates']}/>;
    }
    render() {
        var landCards =  this.props.lands
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