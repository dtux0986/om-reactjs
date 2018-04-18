import React from 'react';

class CardFooter extends React.Component {
	render() {
		return (
				<div id="c-card-footer" className="c-card-footer">
					<div className="c-toggle-input">
						<input className="c-toggle c-toggle-ios" id="c-toggle" type="checkbox"/>
						<label className="c-toggle-btn" for="c-toggle"></label>
					</div>

					<div className="c-angle-input">
						<label>Angle</label>
						<input className="c-angle-btn" type={"text"} value={90}/>
					</div>

					<div class="c-source-input">
						<input className="c-source-btn" type={"button"} value={"CSS"}/>
					</div>

				</div>
		);
	}
}

export default CardFooter;