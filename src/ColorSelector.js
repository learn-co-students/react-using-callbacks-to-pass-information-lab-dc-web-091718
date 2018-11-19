import React, { Component } from "react";
const COLORS = ["#F00",	"#F80",	"#FF0",	"#0F0",	"#00F",	"#508",	"#90D",	"#FFF",	"#000"];
export default class ColorSelector extends Component {
	makeColorSwatches = () =>
		COLORS.map((str, idx) => {
			return (
				<div
					onClick={this.handleClick}
                    key={idx}
                    data-color= {str}
					className="color-swatch"
					style={{ backgroundColor: str }}
				/>
			);
		});

	handleClick = event => {
        let color = event.currentTarget.dataset.color
        this.props.setColor(color)
	};

	render() {
		return <div id="colorSelector">{this.makeColorSwatches()}</div>;
	}
}
