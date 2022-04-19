import React from "react";

export class LandCard extends React.Component {
    render() {
        return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr, 1fr", gridGap: "20px", borderStyle: "solid", borderRadius: "5px" }} id={'land_'+this.props.id}>
                <div>
                    <img src={this.props.land_image}></img>
                </div>
                <div>
                    <h2>{this.props.id}</h2>
                    <ul>
                        <li>VCU total: {this.props.vcu}</li>
                        <li>Tokens totales: {this.props.total_tokens}</li>
                        <li>Tokens disponibles: {this.props.available}_tokens</li>
                        <li>Coordenadas: {this.props.coordinates}</li>
                    </ul>
                    <button>Comprar tokens</button>
                </div>
            </div>
        );
    }
}