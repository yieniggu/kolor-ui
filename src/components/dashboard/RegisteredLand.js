import React from "react";

export class RegisteredLand extends React.Component {
    render() {
        return (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr", gridGap: "10px", borderStyle: "solid", borderRadius: "5px" }}>
                <div>
                    <img src={this.props.land_image}></img><br/>
                    <p>{this.props.id}</p>
                </div>
                <div>
                    <p>{this.props.co2_total}</p>
                </div>
                <div>
                    <p>{this.props.co2_bought}</p>
                </div>
                <div>
                    <p>{this.props.purchase_date}</p>
                </div>
                <div>
                    <p>{this.props.liberation_date}</p>
                </div>
                <div>
                    <p>{this.props.profit}</p>
                </div>
            </div>
        );
    }
};
