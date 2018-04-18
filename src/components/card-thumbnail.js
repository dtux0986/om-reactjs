import React from 'react';

class CardThumbnail extends React.Component {
	render() {

		const angle = this.props.angle;
		const hexColorStart = this.props.hexColorStart;
		const hexColorEnd = this.props.hexColorEnd;

		const overlayStyles = function (angle, hexColorStart, hexColorEnd) {
			return {
				background: `linear-gradient(${angle},${hexColorStart},${hexColorEnd})`
			};
		};

		return (
				<figure id="c-card-thumbnail" className="c-card-thumbnail">
					<div className="c-card-overlay" style={overlayStyles(angle, hexColorStart, hexColorEnd)}></div>
					<img className="c-card-img" src={this.props.thumbnailUrl}/>
				</figure>
		);
	}
}

export default CardThumbnail;