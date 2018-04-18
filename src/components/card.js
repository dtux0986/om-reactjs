import React from 'react';

import CardFooter from '../../src/components/card-footer';
import CardThumbnail from '../../src/components/card-thumbnail';
import CardHeader from '../../src/components/card-header';

class Card extends React.Component {

	render() {

		const getAngle = "180deg";
		const getHexColorStart = "#6284ff";
		const getHexColorEnd = "#ff0000";

		const thumbnailUrl = "http://www.dentoncorkermarshall.com/wp-content/uploads/2013/12/Asia-Square-06.jpg";

		return (
				<div className="col-12 col-sm-6 col-md-3">
					<div id="c-card" className="c-card">
						<div className="c-card__wrapper">
							<div className="c-block">
								<CardHeader
										hexColorStart={getHexColorStart}
										hexColorEnd={getHexColorEnd}
								/>
								<CardThumbnail
										angle={getAngle}
										hexColorStart={getHexColorStart}
										hexColorEnd={getHexColorEnd}
										thumbnailUrl={thumbnailUrl}
								/>
								<CardFooter/>
							</div>
						</div>
					</div>
				</div>
		);
	}
}

export default Card;