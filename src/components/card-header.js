import React from 'react';

class CardHeader extends React.Component {

	render() {

		const hexColorStart = this.props.hexColorStart;
		const hexColorEnd = this.props.hexColorEnd;

		const hexRadioStyles = function(hexColor) {
			return {
				backgroundColor: hexColor
			};
		};

		return (
				<div id="c-card-header" className="c-card-header">
					<div className="c-hex">
						<div className="c-hex-start">
							<div className="c-hex-radio" style={hexRadioStyles(hexColorStart)}></div>
							<input className="c-hex-start-btn" type={"button"} value={hexColorStart}/>
						</div>
						<div className="c-hex-end">
							<div className="c-hex-radio" style={hexRadioStyles(hexColorEnd)}></div>
							<input className="c-hex-end-btn" type={"button"} value={hexColorEnd}/>
						</div>
					</div>
				</div>
		);
	}
}

export default CardHeader;